from django.contrib.auth.models import User
from django.db import models

class Buyer(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    buyer_name = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    alternate_phone_number = models.IntegerField(default=0, null=True, blank=True)
    email_id = models.EmailField(max_length=100)
    address_line1 = models.CharField(max_length=1000)
    address_line2 = models.CharField(max_length=1000)
    pincode = models.IntegerField()
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    country = models.CharField(max_length=20)
    company_name = models.CharField(max_length=30, null=True, blank=True)
    same_billing_address = models.BooleanField(default=True)
    billing_buyer_name  = models.CharField(max_length=100)
    billing_phone_number = models.IntegerField()
    billing_email_id = models.EmailField(max_length=100)
    billing_address_line1 = models.CharField(max_length=1000)
    billing_address_line2 = models.CharField(max_length=1000)
    billing_pincode = models.IntegerField()
    billing_city = models.CharField(max_length=30)
    billing_state = models.CharField(max_length=30)
    billing_country = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.buyer_name}'


class Order(models.Model):
    CHANNEL_CHOICE = (
        ('select','Select Channel'),
        ('custom', 'Custom'),
        ('justgetit', 'JustGetIt')
    )

    id = models.IntegerField(primary_key=True)
    buyer = models.ForeignKey(Buyer, on_delete=models.DO_NOTHING)
    order_date = models.DateField()
    order_channel = models.CharField(max_length=10, choices=CHANNEL_CHOICE, default='', null=True, blank=True)

    def __str__(self):
        return f'{self.order_id}'

class Product(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=20)
    sku = models.IntegerField(null=True, blank=True)
    quantity = models.IntegerField()
    unit_price = models.FloatField()
    tax_rate = models.FloatField(null=True, blank=True)
    hsn = models.IntegerField()
    discount = models.FloatField()
    product_category = models.CharField(max_length=30)
    payment_method = models.CharField(max_length=10)
    sub_total = models.FloatField()
    shipping_charge = models.FloatField(null=True, blank=True)
    giftwrap_charge = models.FloatField(null=True, blank=True)
    transaction_charge = models.FloatField(null=True, blank=True)
    discount = models.FloatField(null=True, blank=True)
    total = models.FloatField()

    def __str__(self):
        return f'{self.id} : {self.product_name}'


class PickupAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address_nickname = models.CharField(max_length=20)
    contact_name = models.CharField(max_length=30)
    phone_number = models.IntegerField()
    address_line1 = models.CharField(max_length=1000)
    address_line2 = models.CharField(max_length=1000)
    pincode = models.IntegerField()
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=30)
    email = models.EmailField(max_length=50)
    is_supplier_address = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.address_nickname} created by {self.user.username}'


class PackageMetrics(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    weight = models.FloatField()
    length = models.FloatField()
    width = models.FloatField()
    height = models.FloatField()
    volumetric_weight = models.FloatField()

    def __str__(self):
        return f'{self.volumetric_weight} Kg'


class PackageDetails(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    package_name = models.CharField(max_length=50)
    package_type = models.CharField(max_length=20)
    package_length = models.FloatField()
    package_height = models.FloatField()
    package_sku = models.IntegerField()

    def __str__(self):
        return f'{self.package_name} added by {self.User.username}'


class PackageImages(models.Model):
    package = models.ForeignKey(PackageDetails, on_delete=models.CASCADE)
    image = models.FileField(upload_to='package_images/')
    uploaded_on = models.DateTimeField(auto_now_add=True)


class OtherDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    reseller_name = models.CharField(max_length=30)
    eway_bill_number = models.CharField(max_length=30)
    gstin_number = models.CharField(max_length=30)

    def __str__(self):
        return f'Reseller Name: {self.reseller_name}'


