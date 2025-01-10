from django.db import models

# Create your models here.
class List(models.Model):
    title=models.TextField()
    year = models.TextField()
    genre = models.TextField()
    rating = models.TextField()
    runtime = models.TextField()
    review = models.TextField()
    director = models.TextField()
    actors = models.TextField()
    # created_at = models.DateTimeField(auto_now_add=True)