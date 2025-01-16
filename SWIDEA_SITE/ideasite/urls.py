from django.urls import path
from . import views

app_name = 'ideasite'

urlpatterns = [
    path('', views.list, name='list'),
    path('create', views.create, name='create'),
    path('detail/<int:pk>', views.detail, name='detail'),
    path('update/<int:pk>', views.update, name='update'),
    path('delete/<int:pk>', views.delete, name='delete'),
     path('update-interest/<int:pk>/', views.update_interest, name='update_interest'),
]