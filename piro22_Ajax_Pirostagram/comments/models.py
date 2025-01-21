from django.db import models
from pirostagram.models import Post 

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField('댓글 내용')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content[:20]
