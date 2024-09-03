from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import registrationFPage



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
        if newRestaurant.is_valis():
            newRestaurant.save()
            return redirect('restaurantListing')

    return render(request, 'registration.html')

def listing(request):
    restaurantDetails = registrationFPage.objects.all
    context = {'restaurant':restaurantDetails}
    return render(request, 'listings.html', context)





