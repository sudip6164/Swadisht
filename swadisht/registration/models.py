from django.db import models

# Create your models here.
class registrationFPage(models.Model):
    restaurantName = models.TextField(max_length=100)
    ownerName =models.TextField(max_length=50)
    email = models.EmailField()
    phone = models.TextField(max_length=20)
    address= models.TextField(max_length=200)
    cuisineType= models.TextField(max_length=100)
    businessLicenceNo=models.TextField(max_length=100)
    panCardNumber = models.TextField(max_length=100)

    def __str__(self):
        return self.ownerName



