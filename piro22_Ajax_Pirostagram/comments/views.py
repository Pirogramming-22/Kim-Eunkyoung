from django.shortcuts import render

# Create your views here.

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Post, Comment
import json

@csrf_exempt
def add_comment(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            post_id = data.get('post_id')
            content = data.get('content')

            if not post_id or not content:
                return JsonResponse({'error': 'Missing data'}, status=400)

            # 댓글 저장
            post = Post.objects.get(id=post_id)
            comment = Comment.objects.create(post=post, content=content)

            return JsonResponse({
                'id': comment.id,
                'content': comment.content,
                'created_at': comment.created_at.strftime('%Y-%m-%d %H:%M:%S'),
            })
        except Post.DoesNotExist:
            return JsonResponse({'error': 'Post not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=405)
