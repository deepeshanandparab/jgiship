domain_name = 'http://127.0.0.1:8000/ship/'

$(document).ready(function(){
         $('#buyer-details-form').submit(function(e){
         e.preventDefault();
         billing_address_state = $('#billing_address_checkbox').is(':checked') ? 'True' : 'False';
         $('.loader-container').show();
         $('.loader').show();
         if($('#billing_address_checkbox').val()==true){
             $.ajax({
                type:'POST',
                url: domain_name + 'order/create/',
                data:{
                    buyer_name:$('#buyer_name').val(),
                    phone_number:$('#phone_number').val(),
                    alternate_phone_number:$('#alternate_phone_number').val(),
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
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                    },
                success:function(){
                        $('.loader-container').hide();
                        $('.loader').hide();
                        $('#panel1_check').show();
                        $('#panel1').hide();
                        $("#headingOne").removeClass('bg-success');
                        $("#headingTwo").addClass('bg-success');
                        $('#collapseTwo_btn').prop('disabled', false);
                        $('#collapseOne_btn').attr('aria-expanded', false);
                        $('#collapseOne').removeClass('show');
                        $('#collapseTwo_btn').attr('aria-expanded', true);
                        $('#collapseTwo').addClass('show');
                    }
                });
         }
         else{
             $.ajax({
                type:'POST',
                url: domain_name + 'order/create/',
                data:{
                    buyer_name:$('#buyer_name').val(),
                    phone_number:$('#phone_number').val(),
                    alternate_phone_number:$('#alternate_phone_number').val(),
                    buyer_email:$('#buyer_email').val(),
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
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                    },
                success:function(){
                        $('.loader-container').hide();
                        $('.loader').hide();
                        $('#panel1_check').show();
                        $('#panel1').hide();
                        $("#headingOne").removeClass('bg-success');
                        $("#headingTwo").addClass('bg-success');
                        $('#collapseTwo_btn').prop('disabled', false);
                        $('#collapseOne_btn').attr('aria-expanded', false);
                        $('#collapseOne').removeClass('show');
                        $('#collapseTwo_btn').attr('aria-expanded', true);
                        $('#collapseTwo').addClass('show');
                    }
                });
         }
         });
});



$(document).ready(function(){
         $('#add_address_form').submit(function(e){
         e.preventDefault();
         supplier_address_status = $('#supplier_address').is(':checked') ? 'True' : 'False';
         $('.loader-container').show();
         $('.loader').show();
         $.ajax({
                type:'POST',
                url: domain_name + 'pickup-address/create/',
                data:{
                    address_nickname:$('#address_nickname').val(),
                    contact_name:$('#contact_name').val(),
                    phone:$('#phone').val(),
                    address_line1:$('#address_line1').val(),
                    address_line2:$('#address_line2').val(),
                    address_pincode:$('#address_pincode').val(),
                    address_city:$('#address_city').val(),
                    address_state:$('#address_state').val(),
                    address_email:$('#address_email').val(),
                    supplier_address:supplier_address_status,
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                    },
                success:function(){
                        $('.loader-container').hide();
                        $('.loader').hide();
                        $('#add_Address_Modal').modal('hide');
                        $('#add_address_form')[0].reset();
                        $("#collapseThree").load(location.href + " #pickup_address_card");
                        $('#panel3_check').show();
                        $('#panel3').hide();
//                        $('#collapseFour_btn').prop('disabled', false);
//                        $('#collapseThree_btn').attr('aria-expanded', false);
//                        $('#collapseThree').removeClass('show');
//                        $('#collapseFour_btn').attr('aria-expanded', true);
//                        $('#collapseFour').addClass('show');
                    }
                });
         });
});