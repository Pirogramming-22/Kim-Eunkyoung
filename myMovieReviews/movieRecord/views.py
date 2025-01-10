from django.urls import reverse
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import List


# Create your views here.

def home_main(request):
    return render(request, 'home/main.html')

def review_create(request):
    if request.method == 'POST':
        List.objects.create(
            title = request.POST['title'],
            year = request.POST['year'],
            genre = request.POST['genre'],
            rating = request.POST['rating'],
            runtime = request.POST['runtime'],
            review = request.POST['review'],
            director = request.POST['director'],
            actors = request.POST['actors'],
        )
        return redirect(reverse('movieRecord:review_list'))
    return render(request, 'reviews/create.html')

def review_detail(request, pk):
    lists=List.objects.get(id=pk)
    return render(request, 'reviews/detail.html', {'list': lists})

def review_list(request):
    lists = List.objects.all()
    context = {'lists' : lists}
    return render(request, 'reviews/list.html', context)

# def review_update(request, pk):
#     list = List.objects.get(id=pk)
#     if request.method =="POST":
#         title2 = request.POST.get('title')
#         year2 = request.POST.get('year')
#         genre2 = request.POST.get('genre')
#         rating2 = request.POST.get('rating')
#         runtime2 = request.POST.get('runtime')
#         review2 = request.POST.get('review')
#         director2 = request.POST.get('director')
#         actors2 = request.POST.get('actors')
#         list.title = title2
#         list.year = year2
#         list.genre = genre2
#         list.rating = rating2
#         list.runtime = runtime2
#         list.review = review2
#         list.director = director2
#         list.actors = actors2
#         if not list.title:
#             list.title = 'Untitled'
#         list.save()
#         return redirect('movieRecord:review_detail', pk=list.pk)
    
#     context = {
#         'list':list
#     }
#     return render(request, 'board/update.html', context)

def review_update(request, pk):
    list = List.objects.get(id=pk)
    if request.method == "POST":
        # 기존 업데이트 코드
        list.title = request.POST.get('title', 'Untitled')
        list.year = request.POST.get('year')
        list.genre = request.POST.get('genre')
        list.rating = request.POST.get('rating')
        list.runtime = request.POST.get('runtime')
        list.review = request.POST.get('review')
        list.director = request.POST.get('director')
        list.actors = request.POST.get('actors')
        list.save()
        return redirect('movieRecord:review_detail', pk=list.pk)

    # 수정 페이지에 데이터 전달
    context = {'list': list}
    return render(request, 'board/update.html', context)


def review_delete(request, pk):
    if request.method == 'POST':
        list = List.objects.get(id=pk)
        list.delete()
        return redirect('movieRecord:review_list')
    return redirect('home:main')