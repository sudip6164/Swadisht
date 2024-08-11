from django.shortcuts import render, redirect
from django.http import HttpResponse

from .forms import registrationForm



def register(request):
    form = registrationForm()
    if request.method == 'POST':
        form = registrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('register')

    context = {'form':form}

    return render(request, 'registration.html', context)




