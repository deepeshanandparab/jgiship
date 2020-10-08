from django.urls import path
from . import views

urlpatterns = [
    path('add-order/', views.add_order, name='add-order'),
    path('generate-pickup/', views.generate_pickup, name='generate-pickup'),
    path('process-order/', views.process_order, name='process-order'),
    path('manifest/', views.manifest, name='manifest'),
    path('orders/', views.orders, name='orders')
]