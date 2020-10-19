domain_name = 'http://127.0.0.1:8000/ship/'
var message_container = document.getElementById('message-container');

$(document).ready(function(){
    $('#buyer_name_error').hide();
    $('#buyer_phone_number_error').hide();
    $('#buyer_email_id_error').hide();
    $('#buyer_address_error').hide();
    $('#buyer_pincode_error').hide();
    $('#buyer_city_error').hide();
    $('#buyer_state_error').hide();
    $('#buyer_country_error').hide();
    $('#order_id_error').hide();
    $('#order_channel_error').hide();
    $('#product_name_error').hide();
    $('#quantity_error').hide();
    $('#unit_price_error').hide();
    $('#product_category_error').hide();
    $('#package_name_error').hide();
    $('#package_type_error').hide();
    $('#package_length_cm_error').hide();
    $('#package_width_cm_error').hide();
    $('#package_height_cm_error').hide();
    $('#package_images_error').hide();
    $('#package_sku_error').hide();
    $('#package_weight_error').hide();
    $('#package_length_error').hide();
    $('#package_width_error').hide();
    $('#package_height_error').hide();
    $('#select_address_msg').hide();
    $('#updated_message').hide();


    /* ---------------------------------------- Buyer Details---------------------------------------------*/
    $('#buyer_name').focusout(function(){
        if($('#buyer_name').val()!=''){$('#buyer_name_error').hide();}
    });
    $('#phone_number').focusout(function(){
        if($('#phone_number').val()!=''){$('#buyer_phone_number_error').hide();}
    });
    $('#buyer_email').focusout(function(){
        if($('#buyer_email').val()!=''){$('#buyer_email_id_error').hide();}
    });
    $('#address1').focusout(function(){
        if($('#address1').val()!=''){$('#buyer_address_error').hide();}
    });
    $('#pincode').focusout(function(){
        if($('#pincode').val()!=''){$('#buyer_pincode_error').hide();}
    });
    $('#city').focusout(function(){
        if($('#city').val()!=''){$('#buyer_city_error').hide();}
    });
    $('#state').focusout(function(){
        if($('#state').val()!=''){$('#buyer_state_error').hide();}
    });
    $('#country').focusout(function(){
        if($('#country').val()!=''){$('#buyer_country_error').hide();}
    });

    /* ---------------------------------------- Order and Product Details---------------------------------------------*/
    $('#order_id').focusout(function(){
        if($('#order_id').val()!=''){$('#order_id_error').hide();}
    });
    $('#order_channel').focusout(function(){
        if($('#order_channel').val()!=''){$('#order_channel_error').hide();}
    });
    $('#product_name').focusout(function(){
        if($('#product_name').val()!=''){$('#product_name_error').hide();}
    });
    $('#quantity').focusout(function(){
        if($('#quantity').val()!=''){$('#quantity_error').hide();}
    });
    $('#unit_price').focusout(function(){
        if($('#unit_price').val()!=''){$('#unit_price_error').hide();}
    });
    $('#product_category').focusout(function(){
        if($('#product_category').val()!=''){$('#product_category_error').hide();}
    });

     /* ---------------------------------------- Package Details---------------------------------------------*/
    $('#id_package_name').focusout(function(){
        if($('#d_package_name').val()!=''){$('#package_name_error').hide();}
    });
    $('#id_package_type').focusout(function(){
        if($('#id_package_type').val()!=''){$('#package_type_error').hide();}
    });
    $('#id_package_length').focusout(function(){
        if($('#id_package_length').val()!=''){$('#package_length_cm_error').hide();}
    });
    $('#id_package_width').focusout(function(){
        if($('#id_package_width').val()!=''){$('#package_width_cm_error').hide();}
    });
    $('#id_package_height').focusout(function(){
        if($('#id_package_height').val()!=''){$('#package_height_cm_error').hide();}
    });
    $('#id_image').focusout(function(){
        if($('#id_image').val()!=''){$('#package_images_error').hide();}
    });
    $('#id_package_sku').focusout(function(){
        if($('#id_package_sku').val()!=''){$('#package_sku_error').hide();}
    });

    /* ---------------------------------------- Package Weight ---------------------------------------------*/
    $('#package_weight').focusout(function(){
        if($('#package_weight').val()!=''){$('#package_weight_error').hide();}
    });
    $('#package_length').focusout(function(){
        if($('#package_length').val()!=''){$('#package_length_error').hide();}
    });
    $('#package_width').focusout(function(){
        if($('#package_width').val()!=''){$('#package_width_error').hide();}
    });
    $('#package_height').focusout(function(){
        if($('#package_height').val()!=''){$('#package_height_error').hide();}
    });
});



$('#buyer_details_btn').click(function(){
        if($('#buyer_form').valid()) {
            $('#panel1_check').show();
            $('#panel1').hide();
            $('#headingOne').removeClass('bg-success');
            $('#headingTwo').addClass('bg-success');
            $('#collapseOne').removeClass('show');
            $('#collapseOne_btn .chevron').removeClass('fa-chevron-down');
            $('#collapseOne_btn .chevron').addClass('fa-chevron-right');
            $('#collapseOne_btn').attr('aria-expanded', false);
            $('#collapseTwo_btn').prop('disabled', false);
            $('#collapseTwo_btn').attr('aria-expanded', true);
            $('#collapseTwo').addClass('show');
            return false;
        }
        else{
             if($('#buyer_name').val()==''){$('#buyer_name_error').show();}
             if($('#phone_number').val()==''){$('#buyer_phone_number_error').show();}
             if($('#buyer_email').val()==''){$('#buyer_email_id_error').show();}
             if($('#address1').val()==''){$('#buyer_address_error').show();}
             if($('#pincode').val()==''){$('#buyer_pincode_error').show();}
             if($('#city').val()==''){$('#buyer_city_error').show();}
             if($('#state').val()==''){$('#buyer_state_error').show();}
             if($('#country').val()==''){$('#buyer_country_error').show();}
        }
    });



$('#order_details_btn').click(function(){
        if($('#order_form').valid()) {
            $('.loader-container').show();
            $('.loader').show();
            $('#panel2_check').show();
            $('#panel2').hide();
            $('#headingTwo').removeClass('bg-success');
            $('#headingThree').addClass('bg-success');
            $('#collapseTwo').removeClass('show');
            $('#collapseTwo_btn .chevron').removeClass('fa-chevron-down');
            $('#collapseTwo_btn .chevron').addClass('fa-chevron-right');
            $('#collapseTwo_btn').attr('aria-expanded', false);
            $('#collapseThree_btn').prop('disabled', false);
            $('#collapseThree_btn').attr('aria-expanded', true);
            $('#collapseThree').addClass('show');
            $('.loader-container').hide();
            $('.loader').hide();
            return false;
        }
        else{
             if($('#order_id').val()==''){$('#order_id_error').show();}
             if($('#order_channel').val()==''){$('#order_channel_error').show();}
             if($('#product_name').val()==''){$('#product_name_error').show();}
             if($('#quantity').val()==''){$('#quantity_error').show();}
             if($('#unit_price').val()==''){$('#unit_price_error').show();}
             if($('#product_category').val()==''){$('#product_category_error').show();}
        }
    });


$('#add_address_form').submit(function(e){
         e.preventDefault();
//         supplier_address_status = $('#supplier_address').is(':checked') ? 'True' : 'False';
         $('.loader-container').show();
         $('.loader').show();
         $.ajax({
                type:'POST',
                url: domain_name + 'pickup-address/create/',
                data:{
                    address_id:$('#address_id').val(),
                    address_nickname:$('#address_nickname').val(),
                    contact_name:$('#contact_name').val(),
                    phone:$('#phone').val(),
                    address_line1:$('#address_line1').val(),
                    address_line2:$('#address_line2').val(),
                    address_pincode:$('#address_pincode').val(),
                    address_city:$('#address_city').val(),
                    address_state:$('#address_state').val(),
                    address_email:$('#address_email').val(),
                    supplier_address:$('#supplier_address').val(),
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                    },
                success:function(data){
                        $('.loader-container').hide();
                        $('.loader').hide();
                        $('#add_Address_Modal').modal('hide');
                        $('#add_address_form')[0].reset();
                        $('#pickup_address_list').load(location.href +  ' #pickup_address_list');
                        $('#panel3_check').show();
                        $('#panel3').hide();
                    }
                });
         });



$('#pickup_address_list').on('click', '.edit-btn', function(){
        $('.loader-container').show();
        $('.loader').show();
        var id = $(this).attr('data-sid');
        var csr = $('input[name=csrfmiddlewaretoken]').val();
        address_data = {address_id:id, csrfmiddlewaretoken: csr};
        $.ajax({
                method:'POST',
                url: domain_name + 'pickup-address/edit/',
                data: address_data,
                success:function(data){
                        $('.loader-container').hide();
                        $('.loader').hide();
                        $('#address_id').val(data.id),
                        $('#address_nickname').val(data.address_nickname),
                        $('#contact_name').val(data.contact_name),
                        $('#phone').val(data.phone_number),
                        $('#address_line1').val(data.address_line1),
                        $('#address_line2').val(data.address_line2),
                        $('#address_pincode').val(data.pincode),
                        $('#address_city').val(data.city),
                        $('#address_state').val(data.state),
                        $('#address_email').val(data.email),
                        $('#supplier_address').val(data.is_supplier_address),
                        $('#pickup_address_list').load(location.href +  ' #pickup_address_section');
                        return false;
                    }
                });
         });



$('#pickup_address_list').on('click', '.select-btn', function(){
        $('.loader-container').show();
        $('.loader').show();

        var id = $(this).attr('data-sid');
        var csr = $('input[name=csrfmiddlewaretoken]').val();
        if($('#selected_btn_'+id).val()=='True'){
            var selected_btn_status = 'False';
            var other_btn_status = 'False';
            $('#address_selected_check').val('False');
            }
        else{
            var selected_btn_status = 'True';
            var other_btn_status = 'False';
            $('#address_selected_check').val('True');
            }
        address_data = {
                        address_id:id,
                        selected_btn: selected_btn_status,
                        other_btn: other_btn_status,
                        csrfmiddlewaretoken: csr};
        $.ajax({
                method:'POST',
                url: domain_name + 'pickup-address/select/',
                data: address_data,
                success:function(data){
                        $('.loader-container').hide();
                        $('.loader').hide();
                        $('#select_address_msg').hide();
                        $('#pickup_address_list').load(location.href +  ' #pickup_address_list');
                        return false;
                    }
                });
         });


$('#pickup_address_list').on('click', '.delete-btn', function(){
        var id = $(this).attr('data-sid');
        var csr = $('input[name=csrfmiddlewaretoken]').val();
        address_data = {address_id:id, csrfmiddlewaretoken: csr};
        $.ajax({
                method:'POST',
                url: domain_name + 'pickup-address/delete/',
                data: address_data,
                success:function(data){
                        $('#pickup_address_list').load(location.href +  ' #pickup_address_list');
                        return false;
                    }
                });
         });


$('#address_next_btn').click(function(){
    if($('#address_selected_check').val()=='False'){
            $('#select_address_msg').show();
        }
        else{
            $('#select_address_msg').hide();
            $('#panel3_check').show();
            $('#panel3').hide();
            $('#headingThree').removeClass('bg-success');
            $('#headingFour').addClass('bg-success');
            $('#collapseThree').removeClass('show');
            $('#collapseThree_btn .chevron').removeClass('fa-chevron-down');
            $('#collapseThree_btn .chevron').addClass('fa-chevron-right');
            $('#collapseThree_btn').attr('aria-expanded', false);
            $('#collapseFour_btn').prop('disabled', false);
            $('#collapseFour_btn').attr('aria-expanded', true);
            $('#collapseFour').addClass('show');
        }

});






$('#package_weight_btn').click(function(){
        if($('#package_weight_form').valid()) {
            $('#panel4_check').show();
            $('#panel4').hide();
            $('#panel5_check').show();
            $('#panel5').hide();
            $('#add_order_btn').prop('disabled', false);
            $('#headingFour').removeClass('bg-success');
            $('#headingFive').addClass('bg-success');
            $('#collapseFour').removeClass('show');
            $('#collapseFour_btn .chevron').removeClass('fa-chevron-down');
            $('#collapseFour_btn .chevron').addClass('fa-chevron-right');
            $('#collapseFour_btn').attr('aria-expanded', false);
            $('#collapseFive_btn').prop('disabled', false);
            $('#collapseFive_btn').attr('aria-expanded', true);
            $('#collapseFive').addClass('show');
            return false;
        }
        else{
             if($('#package_weight').val()==''){$('#package_weight_error').show();}
             if($('#package_length').val()==''){$('#package_length_error').show();}
             if($('#package_width').val()==''){$('#package_width_error').show();}
             if($('#package_height').val()==''){$('#package_height_error').show();}
        }
    });


$('#add_package_form').submit(function(e){
        if($('#add_package_form').valid()) {
            e.preventDefault();
             $('.loader-container').show();
             $('.loader').show();
             $form = $(this)
             var formData = new FormData(this);
             $.ajax({
                 url: window.location.pathname,
                 type: 'POST',
                 data: formData,
                 success: function (response) {
                         $('.loader-container').hide();
                         $('.loader').hide();
                         $('#add_Package_Modal').modal('hide');
                         $('#add_package_form')[0].reset();
                         return false;
                 },
                 cache: false,
                 contentType: false,
                 processData: false
             });
        }
        else{
             if($('#id_package_name').val()==''){$('#package_name_error').show();}
             if($('#id_package_type').val()==''){$('#package_type_error').show();}
             if($('#id_package_length').val()==''){$('#package_length_cm_error').show();}
             if($('#id_package_width').val()==''){$('#package_width_cm_error').show();}
             if($('#id_package_height').val()==''){$('#package_height_cm_error').show();}
             if($('#id_image').val()==''){$('#package_images_error').show();}
             if($('#id_package_sku').val()==''){$('#package_sku_error').show();}
        }
        return false;
    });

/*-------------------------------------------Packages Updated-----------------------------------------*/
var updated_message = document.getElementById('updated_message');

function refresh_packages(){
    $('#package_options_section').load(location.href +  ' #package_options_section_row');
    updated_message.style.display = 'block';
    setTimeout(function(){
         updated_message.style.display = 'none';
    }, 3000);
}



/*-----------------------------------------Add Order----------------------------------------*/


$('#add_order_btn').click(function(){
        $('.page-loader-container').show();
        $('.page-loader').show();
         billing_address_state = $('#billing_address_checkbox').is(':checked') ? 'True' : 'False';
         var csr = $('input[name=csrfmiddlewaretoken]').val();
         payment_method = $('#cod').is(':checked') ? 'cod' : 'prepaid';
         shipping_charge = $('#shipping_charge').val()=='' ? 0 : $('#shipping_charge').val();
         giftwrap_charge  = $('#giftwrap_charge').val()=='' ? 0 : $('#giftwrap_charge').val();
         transaction_charge = $('#transaction_charge').val()=='' ? 0 : $('#transaction_charge').val();
         extra_discount = $('#extra_discount').val()=='' ? 0 : $('#extra_discount').val();
         reseller_name = $('#reseller_name').val()=='' ? 'None' : $('#reseller_name').val();
         eway_bill_number = $('#eway_bill_number').val()=='' ? 'None' : $('#eway_bill_number').val();
         gstin_number = $('#gstin_number').val()=='' ? 'None' : $('#gstin_number').val();
         if($('#billing_address_checkbox').val()==false){
             $.ajax({
                method:'POST',
                url: domain_name + 'order/add/',
                data:{
                    /*-------------------Buyer Details------------------*/
                    buyer_name:$('#buyer_name').val(),
                    phone_number:$('#phone_number').val(),
                    alternate_phone_number:$('#alternate_phone_number').val(),
                    email:$('#buyer_email').val(),
                    address1:$('#address1').val(),
                    address2:$('#address2').val(),
                    pincode:$('#pincode').val(),
                    city:$('#city').val(),
                    state:$('#state').val(),
                    country:$('#country').val(),
                    company:$('#company').val(),
                    billing_address_checkbox: billing_address_state,
                    billing_name:$('#billing_name').val(),
                    billing_phone_number:$('#billing_phone_number').val(),
                    billing_email:$('#billing_email').val(),
                    billing_address1:$('#billing_address1').val(),
                    billing_address2:$('#billing_address2').val(),
                    billing_pincode:$('#billing_pincode').val(),
                    billing_city:$('#billing_city').val(),
                    billing_state:$('#billing_state').val(),
                    billing_country:$('#billing_country').val(),
                    /*-------------------Order Details------------------*/
                    order_id:$('#order_id').val(),
                    order_date:$('#order_date').val(),
                    order_channel:$('#order_channel').val(),
                    /*-------------------Product Details------------------*/
                    product_name:$('#product_name').val(),
                    sku: $('#sku').val()=='' ? 0 : $('#sku').val(),
                    quantity:$('#quantity').val(),
                    unit_price:$('#unit_price').val(),
                    tax_rate:$('#tax_rate').val()=='' ? 0 : $('#tax_rate').val(),
                    hsn:$('#hsn').val()=='' ? 0 : $('#hsn').val(),
                    discount:$('#discount').val()=='' ? 0 : $('#discount').val(),
                    product_category:$('#product_category').val(),
                    payment_method:payment_method,
                    sub_total:$('#sub_total').val(),
                    shipping_charge:shipping_charge,
                    giftwrap_charge:giftwrap_charge,
                    transaction_charge:transaction_charge,
                    extra_discount:extra_discount,
                    total:$('#total').val(),
                    /*-------------------Package Weight------------------*/
                    package_weight: $('#package_weight').val(),
                    package_length: $('#package_length').val(),
                    package_width: $('#package_width').val(),
                    package_height: $('#package_height').val(),
                    volumetric_weight_value: $('#volumetric_weight_text').val(),
                    package: $('#package_options').val()=='' ? 'None' : $('#package_options').val(),
                    /*-------------------Other Details------------------*/
                    reseller_name: reseller_name,
                    eway_bill_number: eway_bill_number,
                    gstin_number: gstin_number,
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                    },
                success:function(){
                        window.scrollTo({ top: 0});
                        $('.page-loader-container').hide();
                        $('.page-loader').hide();
                        location.reload();
                        var message_container = document.getElementById('message-container');
                        message_container.classList.remove('no-visible');
                        message_container.classList.add('visible');
                        setTimeout(function(){
                            message_container.classList.remove('visible');
                            message_container.classList.add('no-visible');
                            }, 3000);
                    }
                });
         }
         else{
             $.ajax({
                method:'POST',
                url: domain_name + 'order/add/',
                data:{
                    /*-------------------Buyer Details------------------*/
                    buyer_name:$('#buyer_name').val(),
                    phone_number:$('#phone_number').val(),
                    alternate_phone_number:$('#alternate_phone_number').val(),
                    email:$('#buyer_email').val(),
                    address1:$('#address1').val(),
                    address2:$('#address2').val(),
                    pincode:$('#pincode').val(),
                    city:$('#city').val(),
                    state:$('#state').val(),
                    country:$('#country').val(),
                    company:$('#company').val(),
                    billing_address_checkbox:billing_address_state,
                    billing_name:$('#buyer_name').val(),
                    billing_phone_number:$('#phone_number').val(),
                    billing_email:$('#buyer_email').val(),
                    billing_address1:$('#address1').val(),
                    billing_address2:$('#address2').val(),
                    billing_pincode:$('#pincode').val(),
                    billing_city:$('#city').val(),
                    billing_state:$('#state').val(),
                    billing_country:$('#country').val(),
                    /*-------------------Order Details------------------*/
                    order_id:$('#order_id').val(),
                    order_date:$('#order_date').val(),
                    order_channel:$('#order_channel').val(),
                    /*-------------------Product Details------------------*/
                    product_name:$('#product_name').val(),
                    sku: $('#sku').val()=='' ? 0 : $('#sku').val(),
                    quantity:$('#quantity').val(),
                    unit_price:$('#unit_price').val(),
                    tax_rate:$('#tax_rate').val()=='' ? 0 : $('#tax_rate').val(),
                    hsn:$('#hsn').val()=='' ? 0 : $('#hsn').val(),
                    discount:$('#discount').val()=='' ? 0 : $('#discount').val(),
                    product_category:$('#product_category').val(),
                    payment_method:payment_method,
                    sub_total:$('#sub_total').val(),
                    shipping_charge:shipping_charge,
                    giftwrap_charge:giftwrap_charge,
                    transaction_charge:transaction_charge,
                    extra_discount:extra_discount,
                    total:$('#total').val(),
                    /*-------------------Package Weight------------------*/
                    package_weight: $('#package_weight').val(),
                    package_length: $('#package_length').val(),
                    package_width: $('#package_width').val(),
                    package_height: $('#package_height').val(),
                    volumetric_weight_value: $('#volumetric_weight_text').val(),
                    package: $('#package_options').val()=='' ? 'None' : $('#package_options').val(),
                    /*-------------------Other Details------------------*/
                    reseller_name: reseller_name,
                    eway_bill_number: eway_bill_number,
                    gstin_number: gstin_number,
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                    },
                success:function(){
                        window.scrollTo({ top: 0});
                        $('.page-loader-container').hide();
                        $('.page-loader').hide();
                        location.reload();
                        message_container.classList.remove('no-visible');
                        message_container.classList.add('visible');
                        setTimeout(function(){
                            message_container.classList.remove('visible');
                            }, 5000);
                        setTimeout(function(){
                            message_container.classList.add('no-visible');
                            }, 5000);
//                         $('#message-container').show();
//                         $('#message-container').delay(3000).hide();
                    }
                });
         }
         });