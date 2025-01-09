from django.urls import path
from .views import *

app_name = 'movieRecord'

urlpatterns = [
    path('main', home_main, name='home_main'),

    path('create', review_create, name='review_create'),

    path('detail', review_detail, name='review_detail'),

    path('list', review_list, name='review_list'),

]