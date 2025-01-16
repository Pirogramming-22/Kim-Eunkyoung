from django.urls import path
from . import views

app_name = 'devtool'

urlpatterns = [
    path('tool/list', views.tool_list, name='tool_list'),
    path('tool/detail/<int:pk>', views.tool_detail, name='tool_detail'),
    path('tool/create', views.tool_create, name='tool_create'),
    path('tool/update/<int:pk>', views.tool_update, name='tool_update'),
    path('tool/delete/<int:pk>', views.tool_delete, name='tool_delete'),
]