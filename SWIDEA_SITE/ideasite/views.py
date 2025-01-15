from django.shortcuts import render, redirect, get_object_or_404
from .models import Idea
from .forms import Ideaform
from devtool.models import Tool 
from django.http import JsonResponse
from django.http import HttpResponseBadRequest
import json

# Create your views here.
def list(request):
    sort_criteria = request.GET.get('sort', '최신순')

    if sort_criteria == '찜하기순':
        ideas = Idea.objects.all().order_by('-interest')
    elif sort_criteria == '이름순':
        ideas = Idea.objects.all().order_by('title')
    elif sort_criteria == '등록순':
        ideas = Idea.objects.all().order_by('id')
    elif sort_criteria == '최신순':
        ideas = Idea.objects.all().order_by('-created_date')
    else:
        ideas = Idea.objects.all()

    return render(request, 'ideasite/list.html', {'ideas': ideas, 'sort_criteria': sort_criteria})


def create(request):
    tools = Tool.objects.all()  # devtool의 Tool 데이터 가져오기
    if request.method == 'POST':
        form = Ideaform(request.POST, request.FILES)
        if form.is_valid():
            idea = form.save(commit=False)
            tool_id = request.POST.get('tool')  # 선택한 예상 개발툴 ID 가져오기
            idea.devtool = Tool.objects.get(id=tool_id)  # 예상 개발툴 설정
            idea.save()
            return redirect('ideasite:detail', pk=idea.pk)
    else:
        form = Ideaform()
    return render(request, 'ideasite/create.html', {'form': form, 'tools': tools})

def detail(request, pk):
    idea = get_object_or_404(Idea, pk=pk)
    context = {
        'idea': idea,
    }
    return render(request, 'ideasite/detail.html', context)

# def update(request):
#     return render(request, 'ideasite/update.html')

def update(request, pk):
  user = Idea.objects.get(id=pk)
  if request.method == 'GET':
    form = Ideaform(instance=user)

    ctx = {
      'form': form,
      'pk': pk,
    }

    return render(request, 'ideasite/update.html', ctx)
  
  form = Ideaform(request.POST, instance=user)
  if form.is_valid():
    form.save()
  return redirect('ideasite:detail', pk=pk)

def delete(request, pk):
    if request.method == 'POST':
        idea = get_object_or_404(Idea, pk=pk)  # 아이디어 가져오기
        idea.delete()  # 아이디어 삭제
        return redirect('ideasite:list')  # 삭제 후 목록 페이지로 리다이렉트
    return redirect('ideasite:detail', pk=pk)  # GET 요청 시 상세 페이지로 리다이렉트


def update_interest(request, pk):
    if request.method == 'POST':
        idea = get_object_or_404(Idea, pk=pk)
        action = request.POST.get('action')

        if action == 'increase':
            idea.interest += 1
        elif action == 'decrease':
            if idea.interest > 0:
                idea.interest -= 1
            else:
                return HttpResponseBadRequest("관심도는 0보다 작을 수 없습니다.")
        else:
            return HttpResponseBadRequest("잘못된 요청입니다.")

        idea.save()
        return redirect('ideasite:list')  # 목록 페이지로 리다이렉트

    return HttpResponseBadRequest("POST 요청만 허용됩니다.")