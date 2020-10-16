from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from jgiship.models import Buyer, PickupAddress, Order, Product, SelectedAddress, PackageDetails, PackageImages
from .states import STATES

def add_order(request):
    address_list = SelectedAddress.objects.all()
    package_list = PackageDetails.objects.filter(user=request.user)
    for i in range(0, len(address_list)):
        if(address_list[i].is_supplier_address==True):
            address_selected = True
            break
        else:
            address_selected = False
    context = {'title': 'Add Order',
               'indian_states': STATES,
               'Address_list': address_list,
               'address_selected_check': address_selected,
               'package_list': package_list
               }
    return render(request, 'jgiship/add_order.html', context)


def create_buyer(request):
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

        buyer_instance = Buyer.objects.create(
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
    return HttpResponse(Buyer)



def create_order(request):
    if request.method == 'POST':
        id = request.POST['order_id']
        order_date = request.POST['order_date']
        order_channel = request.POST['order_channel']
        product_name = request.POST['product_name']
        sku = request.POST['sku']
        quantity = request.POST['quantity']
        unit_price = request.POST['unit_price']
        tax_rate = request.POST['tax_rate']
        hsn = request.POST['hsn']
        discount = request.POST['discount']
        product_category = request.POST['product_category']
        payment_method = request.POST['payment_method']
        sub_total = request.POST['sub_total']
        shipping_charge = request.POST['shipping_charge']
        giftwrap_charge = request.POST['giftwrap_charge']
        transaction_charge = request.POST['transaction_charge']
        extra_discount = request.POST['extra_discount']
        total = request.POST['total']

        order_instance = Order.objects.create(
            id=id,
            order_date=order_date,
            order_channel=order_channel
        )

        Product.objects.create(
            order = order_instance,
            product_name = product_name,
            sku = sku,
            quantity = quantity,
            unit_price = unit_price,
            tax_rate = tax_rate,
            hsn = hsn,
            discount = discount,
            product_category = product_category,
            payment_method = payment_method,
            sub_total = sub_total,
            shipping_charge = shipping_charge,
            giftwrap_charge = giftwrap_charge,
            transaction_charge = transaction_charge,
            extra_discount = extra_discount,
            total = total
        )
    return HttpResponse('')



def add_pickup_address(request):
    if request.method == 'POST':
        id=request.POST['address_id']
        user = request.user
        address_nickname = request.POST['address_nickname']
        contact_name = request.POST['contact_name']
        phone_number = request.POST['phone']
        address_line1 = request.POST['address_line1']
        address_line2 = request.POST['address_line2']
        pincode = request.POST['address_pincode']
        city = request.POST['address_city']
        state = request.POST['address_state']
        email = request.POST['address_email']
        if(request.POST['supplier_address']=='on'):
            is_supplier_address = True
        else:
            is_supplier_address = False

        if(id==''):
            pickup_address = PickupAddress(
                user = user,
                address_nickname = address_nickname,
                contact_name = contact_name,
                phone_number = phone_number,
                address_line1 = address_line1,
                address_line2 = address_line2,
                pincode = pincode,
                city = city,
                state = state,
                email = email
            )
            pickup_address.save()

            selected_address = SelectedAddress(
                id=pickup_address.id,
                address = pickup_address,
                is_supplier_address = is_supplier_address
            )
            selected_address.save()
        else:
            pickup_address = PickupAddress(
                id = id,
                user=user,
                address_nickname=address_nickname,
                contact_name=contact_name,
                phone_number=phone_number,
                address_line1=address_line1,
                address_line2=address_line2,
                pincode=pincode,
                city=city,
                state=state,
                email=email,
            )
            pickup_address.save()

            selected_address = SelectedAddress(
                id=id,
                address=pickup_address,
                is_supplier_address=is_supplier_address
            )
            selected_address.save()
    return HttpResponse('')


def edit_pickup_address(request):
    if request.method == 'POST':
        id = request.POST.get('address_id')
        address = PickupAddress.objects.get(pk=id)
        selected_address = SelectedAddress.objects.get(id=id)
        address_data = {'id': address.id,
                        'address_nickname': address.address_nickname,
                        'contact_name': address.contact_name,
                        'phone_number': address.phone_number,
                        'address_line1': address.address_line1,
                        'address_line2': address.address_line2,
                        'pincode': address.pincode,
                        'city': address.city,
                        'state': address.state,
                        'email': address.email,
                        'is_supplier_address': selected_address.is_supplier_address
                        }
        return JsonResponse(address_data)


def select_pickup_address(request):
    if request.method == 'POST':
        id = int(request.POST.get('address_id'))
        address = PickupAddress.objects.get(pk=id)
        address_list = PickupAddress.objects.all()
        is_supplier_address = request.POST.get('selected_btn')
        other_address = request.POST.get('other_btn')
        selected_address_list = SelectedAddress.objects.all()

        for i in range(0, len(selected_address_list)):
            if(selected_address_list[i].id == id):
                select_pickup_address = SelectedAddress(
                    id=id,
                    address=address,
                    is_supplier_address=is_supplier_address
                )
                select_pickup_address.save()
            else:
                for i in range(0, len(address_list)):
                    if(id != address_list[i].id):
                        select_pickup_address = SelectedAddress(
                            id=address_list[i].id,
                            address=address_list[i],
                            is_supplier_address=other_address
                        )
                        select_pickup_address.save()
    return HttpResponse('')


def delete_pickup_address(request):
    if request.method == 'POST':
        id = request.POST.get('address_id')
        address = PickupAddress.objects.get(pk=id)
        address.delete()
        return JsonResponse({'status':1})
    else:
        return JsonResponse({'status':0})


def add_package_details(request):
    if request.method == 'POST':
        user = request.user
        package_name = request.POST.get('package_name')
        package_type = request.POST.get('package_type')
        package_length = request.POST.get('package_length_cm')
        package_width = request.POST.get('package_width_cm')
        package_height = request.POST.get('package_width_cm')
        package_quantity = request.POST.get('package_quantity')
        package_sku = request.POST.get('package_sku_code')
        image = request.POST.get('package_files')

        package_details_instance = PackageDetails.objects.create(
            user=user,
            package_name=package_name,
            package_type=package_type,
            package_length=package_length,
            package_width=package_width,
            package_height=package_height,
            package_quantity=package_quantity,
            package_sku=package_sku
        )

        PackageImages.objects.create(
            package = package_details_instance,
            image=image
        )
    return HttpResponse('')



def add_new_order(request):
    pass



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
