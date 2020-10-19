from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from jgiship.forms import PackageDetailsForm, PackageImageForm
from .states import STATES
from jgiship.models import (Buyer,
                            PickupAddress,
                            Order,
                            Product,
                            SelectedAddress,
                            PackageDetails,
                            PackageImages,
                            PackageMetrics,
                            OtherDetails)


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

    if request.method == 'POST':
        package_form = PackageDetailsForm(request.POST)
        package_image_form = PackageImageForm(request.POST, request.FILES)
        package_obj = package_form.save(commit=False)
        package_obj.user = request.user
        package_form.save()

        package_image_obj = package_image_form.save(commit=False)
        package_image_obj.package = package_obj
        package_image_form.save()
        return render(request, 'jgiship/add_order.html', context)
    else:
        package_form = PackageDetailsForm()
        package_image_form = PackageImageForm()
    return render(request, 'jgiship/add_order.html', {'package_form': package_form, 'package_image_form': package_image_form}, context)



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



def add_new_order(request):
    if request.method == 'POST':
        # Buyer Details
        user = request.user
        buyer_name = request.POST.get('buyer_name')
        phone_number = request.POST.get('phone_number')
        alternate_phone_number = request.POST.get('alternate_phone_number')
        email_id = request.POST.get('email')
        address_line1 = request.POST.get('address1')
        address_line2 = request.POST.get('address2')
        pincode = request.POST.get('pincode')
        city = request.POST.get('city')
        state = request.POST.get('state')
        country = request.POST.get('country')
        company_name = request.POST.get('company')
        same_billing_address = request.POST.get('billing_address_checkbox')
        billing_buyer_name = request.POST.get('billing_name')
        billing_phone_number = request.POST.get('billing_phone_number')
        billing_email_id = request.POST.get('billing_email')
        billing_address_line1 = request.POST.get('billing_address1')
        billing_address_line2 = request.POST.get('billing_address2')
        billing_pincode = request.POST.get('billing_pincode')
        billing_city = request.POST.get('billing_city')
        billing_state = request.POST.get('billing_state')
        billing_country = request.POST.get('billing_country')

        buyer_instance = Buyer.objects.create(
            user = user,
            buyer_name = buyer_name,
            phone_number = phone_number,
            alternate_phone_number = alternate_phone_number,
            email_id = email_id,
            address_line1 = address_line1,
            address_line2 = address_line2,
            pincode = pincode,
            city = city,
            state = state,
            country = country,
            company_name = company_name,
            same_billing_address = same_billing_address,
            billing_buyer_name = billing_buyer_name,
            billing_phone_number = billing_phone_number,
            billing_email_id = billing_email_id,
            billing_address_line1 = billing_address_line1,
            billing_address_line2 = billing_address_line2,
            billing_pincode = billing_pincode,
            billing_city = billing_city,
            billing_state = billing_state,
            billing_country = billing_country
        )

        # Order Details
        id = request.POST.get('order_id')
        buyer = buyer_instance
        order_date = request.POST.get('order_date')
        order_channel = request.POST.get('order_channel')

        order_instance = Order.objects.create(
            id = id,
            buyer = buyer,
            order_date = order_date,
            order_channel = order_channel
        )

        # Product Details
        order = order_instance
        product_name = request.POST.get('product_name')
        sku = request.POST.get('sku')
        quantity = request.POST.get('quantity')
        unit_price = request.POST.get('unit_price')
        tax_rate = request.POST.get('tax_rate')
        hsn = request.POST.get('hsn')
        discount = request.POST.get('discount')
        product_category = request.POST.get('product_category')
        payment_method = request.POST.get('payment_method')
        sub_total = request.POST.get('sub_total')
        shipping_charge = request.POST.get('shipping_charge')
        giftwrap_charge = request.POST.get('giftwrap_charge')
        transaction_charge = request.POST.get('transaction_charge')
        extra_discount = request.POST.get('extra_discount')
        total = request.POST.get('total')

        Product.objects.create(
            order = order,
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

        # Package Metrics
        order = order_instance
        weight = request.POST.get('package_weight')
        length = request.POST.get('package_length')
        width = request.POST.get('package_width')
        height = request.POST.get('package_height')
        volumetric_weight = request.POST.get('volumetric_weight_value')
        package = request.POST.get('package')

        PackageMetrics.objects.create(
            order = order,
            weight = weight,
            length = length,
            width = width,
            height = height,
            volumetric_weight = volumetric_weight,
            package_id = package
        )

        # Other Details
        order = order_instance
        reseller_name = request.POST.get('reseller_name')
        eway_bill_number = request.POST.get('eway_bill_number')
        gstin_number = request.POST.get('gstin_number')

        OtherDetails.objects.create(
            order = order,
            reseller_name = reseller_name,
            eway_bill_number = eway_bill_number,
            gstin_number = gstin_number
        )
    return HttpResponse('')





def process_order(request):
    context = {'title': 'Process Order', 'process_order_active': True, 'generate_pickup_page': False, 'manifest_page': False, 'orders_page': False}
    return render(request, 'jgiship/process_order.html', context)

def generate_pickup(request):
    context = {'title': 'Generate Pickup', 'process_order_active': False, 'generate_pickup_page': True, 'manifest_page': False, 'orders_page': False}
    return render(request, 'jgiship/generate_pickup.html', context)

def manifest(request):
    context = {'title': 'Download Manifest', 'process_order_active': False, 'generate_pickup_page': False, 'manifest_page': True, 'orders_page': False}
    return render(request, 'jgiship/manifest.html', context)

def orders(request):
    order_list = Order.objects.all()

    paginator = Paginator(order_list, 6)
    page = request.GET.get('page')
    try:
        response = paginator.page(page)
    except PageNotAnInteger:
        response = paginator.page(1)
    except EmptyPage:
        response = paginator.page(paginator.num_pages)

    first_item_number = 6 * (response.number - 1) + 1
    context = {'title': 'Previous Orders',
               'process_order_active': False,
               'generate_pickup_page': False,
               'manifest_page': False,
               'orders_page': True,
               'order_list':response,
               'page_size': 6,
               'first_item_number': first_item_number
               }
    return render(request, 'jgiship/orders.html', context)
