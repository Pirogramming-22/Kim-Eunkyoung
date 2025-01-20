from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from .models import Post
from .forms import PostForm
from django.http import HttpResponseRedirect
from django.urls import reverse
from comments.models import Comment

# Create your views here.
def main(request):
    posts = Post.objects.all()
    return render(request, 'main.html', {'posts': posts})


from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

@csrf_exempt
def like_ajax(request):
    req = json.loads(request.body)
    post_id = req['id']
    button_type = req['type']

    post = Post.objects.get(id=post_id)

    post.like += 1
    
    post.save()

    return JsonResponse({'id': post_id, 'type': button_type})
