domain_name = 'http://127.0.0.1:8000/ship/'

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
    $('#select_address_msg').hide();

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

//
//$('#buyer_form').submit(function(e){
//         e.preventDefault();
//         var form = document.getElementById('buyer_form');
//         var isValidForm = form.checkValidity();
//         console.log(isValidForm)
//         if(isValidForm==true){
//                $('#panel1_check').show();
//                $('#panel1').hide();
//                $(#headingOne).removeClass('bg-success');
//                $(#headingTwo).addClass('bg-success');
//                $('#collapseTwo_btn').prop('disabled', false);
//                $('#collapseOne_btn').attr('aria-expanded', false);
//                $('#collapseOne').removeClass('show');
//                $('#collapseTwo_btn').attr('aria-expanded', true);
//                $('#collapseTwo').addClass('show');
//                console.log(isValidForm)
//            }
//            else{
//                if($('#buyer_name').val()==''){$('#buyer_name_error').show();}
//                if($('#phone_number').val()==''){$('#buyer_phone_number_error').show();}
//                if($('#buyer_email').val()==''){$('#buyer_email_id_error').show();}
//                if($('#address1').val()==''){$('#buyer_address_error').show();}
//                if($('#pincode').val()==''){$('#buyer_pincode_error').show();}
//                if($('#city').val()==''){$('#buyer_city_error').show();}
//                if($('#state').val()==''){$('#buyer_state_error').show();}
//                if($('#country').val()==''){$('#buyer_country_error').show();}
//                console.log(isValidForm)
//            }
//
//});



//$(document).ready(function(){
//         $('#buyer-details-form').submit(function(e){
//         e.preventDefault();
//         billing_address_state = $('#billing_address_checkbox').is(':checked') ? 'True' : 'False';
//         $('.loader-container').show();
//         $('.loader').show();
//         if($('#billing_address_checkbox').val()==true){
//             $.ajax({
//                type:'POST',
//                url: domain_name + 'buyer/create/',
//                data:{
//                    buyer_name:$('#buyer_name').val(),
//                    phone_number:$('#phone_number').val(),
//                    alternate_phone_number:$('#alternate_phone_number').val(),
//                    address1:$('#address1').val(),
//                    address2:$('#address2').val(),
//                    pincode:$('#pincode').val(),
//                    city:$('#city').val(),
//                    state:$('#state').val(),
//                    country:$('#country').val(),
//                    company:$('#company').val(),
//                    billing_address_checkbox: billing_address_state,
//                    billing_name:$('#billing_name').val(),
//                    billing_phone_number:$('#billing_phone_number').val(),
//                    billing_email:$('#billing_email').val(),
//                    billing_address1:$('#billing_address1').val(),
//                    billing_address2:$('#billing_address2').val(),
//                    billing_pincode:$('#billing_pincode').val(),
//                    billing_city:$('#billing_city').val(),
//                    billing_state:$('#billing_state').val(),
//                    billing_country:$('#billing_country').val(),
//                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
//                    },
//                success:function(){
//                        $('.loader-container').hide();
//                        $('.loader').hide();
//                        $('#panel1_check').show();
//                        $('#panel1').hide();
//                        $(#headingOne).removeClass('bg-success');
//                        $(#headingTwo).addClass('bg-success');
//                        $('#collapseTwo_btn').prop('disabled', false);
//                        $('#collapseOne_btn').attr('aria-expanded', false);
//                        $('#collapseOne').removeClass('show');
//                        $('#collapseTwo_btn').attr('aria-expanded', true);
//                        $('#collapseTwo').addClass('show');
//                    }
//                });
//         }
//         else{
//             $.ajax({
//                type:'POST',
//                url: domain_name + 'buyer/create/',
//                data:{
//                    buyer_name:$('#buyer_name').val(),
//                    phone_number:$('#phone_number').val(),
//                    alternate_phone_number:$('#alternate_phone_number').val(),
//                    buyer_email:$('#buyer_email').val(),
//                    address1:$('#address1').val(),
//                    address2:$('#address2').val(),
//                    pincode:$('#pincode').val(),
//                    city:$('#city').val(),
//                    state:$('#state').val(),
//                    country:$('#country').val(),
//                    company:$('#company').val(),
//                    billing_address_checkbox:billing_address_state,
//                    billing_name:$('#buyer_name').val(),
//                    billing_phone_number:$('#phone_number').val(),
//                    billing_email:$('#buyer_email').val(),
//                    billing_address1:$('#address1').val(),
//                    billing_address2:$('#address2').val(),
//                    billing_pincode:$('#pincode').val(),
//                    billing_city:$('#city').val(),
//                    billing_state:$('#state').val(),
//                    billing_country:$('#country').val(),
//                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
//                    },
//                success:function(){
//                        $('.loader-container').hide();
//                        $('.loader').hide();
//                        $('#panel1_check').show();
//                        $('#panel1').hide();
//                        $(#headingOne).removeClass('bg-success');
//                        $(#headingTwo).addClass('bg-success');
//                        $('#collapseTwo_btn').prop('disabled', false);
//                        $('#collapseOne_btn').attr('aria-expanded', false);
//                        $('#collapseOne').removeClass('show');
//                        $('#collapseTwo_btn').attr('aria-expanded', true);
//                        $('#collapseTwo').addClass('show');
//                    }
//                });
//         }
//         });
//});
//
//
//
//
//$(document).ready(function(){
//         $('#order_form').submit(function(e){
//         e.preventDefault();
//         payment_method = $('#cod').is(':checked') ? 'cod' : 'prepaid';
//         shipping_charge = $('#shipping_charge').val()=='' ? 0 : $('#shipping_charge').val();
//         giftwrap_charge  = $('#giftwrap_charge').val()=='' ? 0 : $('#giftwrap_charge').val();
//         transaction_charge = $('#transaction_charge').val()=='' ? 0 : $('#transaction_charge').val();
//         extra_discount = $('#extra_discount').val()=='' ? 0 : $('#extra_discount').val();
//         $('.loader-container').show();
//         $('.loader').show();
//         $.ajax({
//                type:'POST',
//                url: domain_name + 'order/create/',
//                data:{
//                    order_id:$('#order_id').val(),
//                    order_date:$('#order_date').val(),
//                    order_channel:$('#order_channel').val(),
//                    product_name:$('#product_name').val(),
//                    sku:$('#sku').val(),
//                    quantity:$('#quantity').val(),
//                    unit_price:$('#unit_price').val(),
//                    tax_rate:$('#tax_rate').val(),
//                    hsn:$('#hsn').val(),
//                    discount:$('#discount').val(),
//                    product_category:$('#product_category').val(),
//                    payment_method:payment_method,
//                    sub_total:$('#sub_total').val(),
//                    shipping_charge:shipping_charge,
//                    giftwrap_charge:giftwrap_charge,
//                    transaction_charge:transaction_charge,
//                    extra_discount:extra_discount,
//                    total:$('#total').val(),
//                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
//                    },
//                success:function(){
//                        $('.loader-container').hide();
//                        $('.loader').hide();
//                        $('#panel2_check').show();
//                        $('#panel2').hide();
//                        $(#headingTwo).removeClass('bg-success');
//                        $(#headingThree).addClass('bg-success');
//                        $('#collapseThree_btn').prop('disabled', false);
//                        $('#collapseTwo_btn').attr('aria-expanded', false);
//                        $('#collapseTwo').removeClass('show');
//                        $('#collapseThree_btn').attr('aria-expanded', true);
//                        $('#collapseThree').addClass('show');
//                    }
//                });
//         });
//});
//
//
//
//


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
//                        $( "#div-to-be-reloaded" ).load( "ajax/complete-response.html" );
                        $('#panel3_check').show();
                        $('#panel3').hide();
                    }
                });
         });


//$('#edit_address_form_'+get_btn_id()).submit(function(e){
//         e.preventDefault();
//         edit_supplier_address_status = $('#edit_supplier_address_'+get_btn_id()).is(':checked') ? 'True' : 'False';
//         $('.loader-container').show();
//         $('.loader').show();
//         $.ajax({
//                type:'POST',
//                url: domain_name + 'pickup-address/update/'+get_btn_id(),
//                data:{
//                    id=$('#edit_phone').val(),
//                    address_nickname:$('#edit_address_nickname'+get_btn_id()).val(),
//                    contact_name:$('#edit_contact_name'+get_btn_id()).val(),
//                    phone:$('#edit_phone'+get_btn_id()).val(),
//                    address_line1:$('#edit_address_line1'+get_btn_id()).val(),
//                    address_line2:$('#edit_address_line2'+get_btn_id()).val(),
//                    address_pincode:$('#edit_address_pincode'+get_btn_id()).val(),
//                    address_city:$('#edit_address_city'+get_btn_id()).val(),
//                    address_state:$('#edit_address_state'+get_btn_id()).val(),
//                    address_email:$('#edit_address_email'+get_btn_id()).val(),
//                    supplier_address:supplier_address_status,
//                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
//                    },
//                success:function(data){
//                        $('.loader-container').hide();
//                        $('.loader').hide();
//                        $('#edit_Address_Modal_'+get_btn_id()).modal('hide');
//                        $('#edit_address_form_'+get_btn_id())[0].reset();
//                        $('#pickup_address_list').load(location.href +  ' #pickup_address_list');
//                        $('#panel3_check').show();
//                        $('#panel3').hide();
//                    }
//                });
//         });


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