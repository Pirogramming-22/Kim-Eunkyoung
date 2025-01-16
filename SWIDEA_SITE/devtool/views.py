# Create your views here.
from django.shortcuts import get_object_or_404, render, redirect
from .models import Tool
from .forms import Toolform

# 예상 개발툴 목록 가져오기
def tool_list(request):
    tools = Tool.objects.all()
    return render(request, 'devtool/tool_list.html', {'tools': tools})

# Create your views here.
def tool_create(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        kind = request.POST.get('kind')
        content = request.POST.get('content')

        # Tool 객체 생성
        tool = Tool.objects.create(name=name, kind=kind, content=content)
        
        # 생성 후 detail 페이지로 리다이렉트
        return redirect('devtool:tool_detail', pk=tool.pk)
    
    return render(request, 'devtool/tool_create.html')


def tool_detail(request, pk):
    tool = get_object_or_404(Tool, pk=pk)
    return render(request, 'devtool/tool_detail.html', {'tool': tool})


def tool_delete(request, pk):
    tool = get_object_or_404(Tool, pk=pk)  # 삭제할 Tool 객체 가져오기
    if request.method == 'POST':  # POST 요청일 때 삭제 수행
        tool.delete()
        return redirect('devtool:tool_list')  # 삭제 후 목록 페이지로 이동
    return render(request, 'devtool/tool_detail.html', {'tool': tool})  # 기본적으로 detail 페이지 렌더링


def tool_update(request, pk):
  user = Tool.objects.get(id=pk)
  if request.method == 'GET':
    form = Toolform(instance=user)

    ctx = {
      'form': form,
      'pk': pk,
    }

    return render(request, 'devtool/tool_update.html', ctx)
  
  form = Toolform(request.POST, instance=user)
  if form.is_valid():
    form.save()
  return redirect('devtool:tool_detail', pk=pk)
