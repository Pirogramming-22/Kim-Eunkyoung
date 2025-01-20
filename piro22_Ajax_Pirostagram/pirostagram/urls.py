from django.urls import path
from . import views

app_name = 'pirostagram'

urlpatterns = [
    path('', views.main, name='main'),
    path('like_ajax/', views.like_ajax, name='like_ajax'),
]