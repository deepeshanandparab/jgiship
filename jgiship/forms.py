from django import forms
from django_countries.fields import CountryField

class CustomForm(forms.Form):
    country = CountryField(blank_label='(Select country)').formfield()