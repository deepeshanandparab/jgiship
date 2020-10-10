from django.contrib import admin
from .models import Buyer, Order, Product, PickupAddress, PackageDetails, PackageMetrics, PackageImages, OtherDetails

admin.site.register(Buyer)
admin.site.register(Order)
admin.site.register(Product)
admin.site.register(PickupAddress)
admin.site.register(PackageDetails)
admin.site.register(PackageMetrics)
admin.site.register(PackageImages)
admin.site.register(OtherDetails)
