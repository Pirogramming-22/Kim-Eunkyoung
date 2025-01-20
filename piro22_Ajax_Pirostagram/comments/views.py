from django.shortcuts import render

# Create your views here.

def create(request):
    return render(request, 'comments/create.html')

def update(request):
    return render(request, 'comments/update.html')