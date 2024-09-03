from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import registrationFPage
from .forms import registrationForm



def register(request):
    # if request.method == 'POST':
    #     form = registrationForm(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         return redirect('register')

    # context = {'form':form}


    if request.method == 'POST':
        restaurant  = request.POST['restaurantName']
        owner = request.POST['ownerName']
        email = request.POST['email']
        phone = request.POST['phone']
        address = request.POST['address']
        cuisine = request.POST['cuisine']
        business = request.POST['businessLicense']
        panCard = request.POST['panCard']

        newRestaurant = registrationFPage(restaurantName=restaurant, ownerName=owner, email=email, phone=phone, address= address, cuisineType=cuisine, businessLicence= business, panCard=panCard)
        newRestaurant.save()

    return render(request, 'registration.html')




