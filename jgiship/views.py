from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime

from jgiship.models import Order, Buyer
from .states import STATES

def add_order(request):
    context = {'title': 'Add Order', 'indian_states': STATES}
    return render(request, 'jgiship/add_order.html', context)


def create_order(request):
    if request.method == 'POST':
        user = request.user
        buyer_name = request.POST['buyer_name']
        phone_number = request.POST['phone_number']
        alternate_phone_number = request.POST['alternate_phone_number']
        buyer_email = request.POST['buyer_email']
        address1 = request.POST['address1']
        address2 = request.POST['address2']
        pincode = request.POST['pincode']
        city = request.POST['city']
        state = request.POST['state']
        country = request.POST['country']
        company = request.POST['company']
        billing_address_checkbox = request.POST['billing_address_checkbox']
        billing_name = request.POST['billing_name']
        billing_phone_number = request.POST['billing_phone_number']
        billing_email = request.POST['billing_email']
        billing_address1 = request.POST['billing_address1']
        billing_address2 = request.POST['billing_address2']
        billing_pincode = request.POST['billing_pincode']
        billing_city = request.POST['billing_city']
        billing_state = request.POST['billing_state']
        billing_country = request.POST['billing_country']

        Buyer.objects.create(
            user = user,
            buyer_name = buyer_name,
            phone_number = phone_number,
            alternate_phone_number = alternate_phone_number,
            email_id = buyer_email,
            address_line1 = address1,
            address_line2 = address2,
            pincode = pincode,
            city = city,
            state = state,
            country = country,
            company_name = company,
            same_billing_address = billing_address_checkbox,
            billing_buyer_name = billing_name,
            billing_phone_number = billing_phone_number,
            billing_email_id = billing_email,
            billing_address_line1 = billing_address1,
            billing_address_line2 = billing_address2,
            billing_pincode = billing_pincode,
            billing_city = billing_city,
            billing_state = billing_state,
            billing_country = billing_country
        )
    return HttpResponse('')


def process_order(request):
    context = {'title': 'Process Order'}
    return render(request, 'jgiship/process_order.html', context)

def generate_pickup(request):
    context = {'title': 'Generate Pickup'}
    return render(request, 'jgiship/generate_pickup.html', context)

def manifest(request):
    context = {'title': 'Download Manifest'}
    return render(request, 'jgiship/manifest.html', context)

def orders(request):
    context = {'title': 'Previous Orders'}
    return render(request, 'jgiship/orders.html', context)
