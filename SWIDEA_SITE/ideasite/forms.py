from django import forms
from .models import Idea

class Ideaform(forms.ModelForm):
    class Meta:
        model = Idea
        fields = ['title', 'image', 'content', 'interest']  