from django.db import models

# Create your models here.
class registrationFPage(models.Model):
    restaurantName = models.CharField(max_length=100)
    ownerName =models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=20)
    address= models.CharField(max_length=200)
    cuisineType= models.CharField(max_length=100)
    businessLicence=models.CharField(max_length=100)
    panCard = models.CharField(max_length=100)

    def __str__(self):
        return self.restaurantName



