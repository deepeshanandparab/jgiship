from django import forms
from .models import PackageDetails, PackageImages


class PackageDetailsForm(forms.ModelForm):
    class Meta:
        model = PackageDetails
        fields = ['package_name', 'package_type', 'package_length', 'package_width',
                  'package_height', 'package_quantity','package_sku']

class PackageImageForm(forms.ModelForm):
    class Meta:
        model = PackageImages
        fields = ['image']