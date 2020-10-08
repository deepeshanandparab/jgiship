from django.shortcuts import render
from datetime import datetime

def add_order(request):
    context = {'title': 'Add Order'}
    return render(request, 'jgiship/add_order.html', context)

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
