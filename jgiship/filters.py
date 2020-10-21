from django.forms import TextInput
from .models import Order
import django_filters

class OrderIdFilter(django_filters.FilterSet):
    id = django_filters.CharFilter(lookup_expr='iexact',
                                      widget=TextInput
                                        (
                                          attrs={
                                              'placeholder': 'Search by order id',
                                              'autocomplete' : 'false',
                                              'class': 'form-control my-0 py-1 border-radius-left-30px font-12'
                                                 }),label='')

    class Meta:
        model = Order
        fields = ['id']