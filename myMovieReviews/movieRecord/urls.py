from django.urls import path
from .views import *

app_name = 'movieRecord'

urlpatterns = [
    #메인화면
    path('', home_main, name='home_main'),

    #폼 작성하기
    path('create', review_create, name='review_create'),

    #디테일하게 보기
    path('detail/<int:pk>', review_detail, name='review_detail'),

    #리뷰 리스트
    path('list', review_list, name='review_list'),

    #리뷰 업데이트
    path('update/<int:pk>', review_update, name='review_update'),

    #리뷰 삭제
    path('delete/<int:pk>', review_delete, name='review_delete'),

]