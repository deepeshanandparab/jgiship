from django.urls import path
from . import views

urlpatterns = [
    path('add-order/', views.add_order, name='add-order'),
    # path('buyer/create/', views.create_buyer, name='create-buyer'),
    # path('order/create/', views.create_order, name='create-order'),
    path('order/add/', views.add_new_order, name='add-new_order'),


    path('pickup-address/create/', views.add_pickup_address, name='add-pickup-address'),
    path('pickup-address/edit/', views.edit_pickup_address, name='edit-pickup-address'),
    path('pickup-address/select/', views.select_pickup_address, name='select-pickup-address'),
    path('pickup-address/delete/', views.delete_pickup_address, name='delete-pickup-address'),

    # path('package-details/create/', views.add_package_details, name='add-package-details'),

    path('generate-pickup/', views.generate_pickup, name='generate-pickup'),
    path('process-order/', views.process_order, name='process-order'),
    path('manifest/', views.manifest, name='manifest'),
    path('orders/', views.orders, name='orders')
]