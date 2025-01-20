from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from .models import Post
from django.http import HttpResponseRedirect
from django.urls import reverse

# Create your views here.
def main(request):
    posts = Post.objects.all()
    return render(request, 'home/main.html', {'posts': posts})

# def detail(request, post_id):
#     post = get_object_or_404(Post, id=post_id)  # 게시물 가져오기
#     return render(request, 'home/detail.html', {'post': post})


# def create(request):
#     if request.method == 'POST':
#         # 폼에서 업로드된 이미지 저장
#         image = request.FILES['image']
#         description = request.POST['description']
#         Post.objects.create(image=image, description=description)
#         return HttpResponseRedirect(reverse('pirostagram:main'))  # 메인 페이지로 리다이렉트
#     return render(request, 'home/create.html')



from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db.models import F
import json

@csrf_exempt
def like_ajax(request):
    if request.method == 'POST':
        try:
            req_body = request.body.decode('utf-8')
            req = json.loads(req_body)
            post_id = req.get('id')
            button_type = req.get('type')

            # 좋아요 증가
            Post.objects.filter(id=post_id).update(like=F('like') + 1)
            updated_post = Post.objects.get(id=post_id)

            return JsonResponse({'id': updated_post.id, 'like': updated_post.like})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)

