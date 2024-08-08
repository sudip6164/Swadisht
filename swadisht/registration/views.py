from django.shortcuts import render, redirect
from django.http import HttpResponse



def register(request):
    return render(request, 'registration.html')


