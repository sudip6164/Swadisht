# Generated by Django 5.0.8 on 2024-08-14 03:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='registrationfpage',
            old_name='businessLicenceNo',
            new_name='businessLicence',
        ),
        migrations.RenameField(
            model_name='registrationfpage',
            old_name='cuisineType',
            new_name='cuisine',
        ),
        migrations.RenameField(
            model_name='registrationfpage',
            old_name='panCardNumber',
            new_name='panCard',
        ),
    ]
