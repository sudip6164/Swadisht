from django.forms import ModelForm
from .models import registrationFPage


class registrationForm(ModelForm):
    class Meta:
        model = registrationFPage
        fields = '__all__'

