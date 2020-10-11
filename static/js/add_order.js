function showBillingForm() {
  var checkBox = document.getElementById("billing_address_checkbox");
  var billing_form = document.getElementById("billing_address_form");

  if (checkBox.checked == true){
    billing_form.style.display = "none";
  } else {
    billing_form.style.display = "block";
  }
}

function showLocationMap() {
  var checkBox = document.getElementById("hyperlocal-shipment");
  var location_map = document.getElementById("location-map");

  if (checkBox.checked == true){
    location_map.style.display = "block";
  } else {
    location_map.style.display = "none";
  }
}



$(document).ready(function(){
  $("#showextra-btn").click(function(){
    $("#product-details-extras").toggle();
    if($("#product-details-buttons .chevron").hasClass("fa-chevron-up")){
            $("#product-details-buttons .chevron").addClass('fa-chevron-down').removeClass('fa-chevron-up');
        }
        else{
            $("#product-details-buttons .chevron").addClass('fa-chevron-up').removeClass('fa-chevron-down');
        }
  });
});



$(document).ready(function(){
  $("#more-charges-button").click(function(){
    $("#more-charges").toggle();

    if($("#more-charges-button .chevron").hasClass("fa-chevron-up")){
            $("#more-charges-button .chevron").addClass('fa-chevron-down').removeClass('fa-chevron-up');
            $('#hide-more-charges').hide();
            $('#show-more-charges').show();
        }
        else{
            $("#more-charges-button .chevron").addClass('fa-chevron-up').removeClass('fa-chevron-down');
            $('#hide-more-charges').show();
            $("#show-more-charges").hide();
        }
  });
});


$('#collapseOne').on('shown.bs.collapse', function() {
    $("#headingOne .chevron").addClass('fa-chevron-down').removeClass('fa-chevron-right');
    $("#headingOne").addClass('bg-success');
  });

$('#collapseOne').on('hidden.bs.collapse', function() {
    $("#headingOne .chevron").addClass('fa-chevron-right').removeClass('fa-chevron-down');
    $("#headingOne").removeClass('bg-success');
  });

$('#collapseTwo').on('shown.bs.collapse', function() {
    $("#headingTwo .chevron").addClass('fa-chevron-down').removeClass('fa-chevron-right');
    $("#headingTwo").addClass('bg-success');
  });

$('#collapseTwo').on('hidden.bs.collapse', function() {
    $("#headingTwo .chevron").addClass('fa-chevron-right').removeClass('fa-chevron-down');
    $("#headingTwo").removeClass('bg-success');
  });

$('#collapseThree').on('shown.bs.collapse', function() {
    $("#headingThree .chevron").addClass('fa-chevron-down').removeClass('fa-chevron-right');
    $("#headingThree").addClass('bg-success');
  });

$('#collapseThree').on('hidden.bs.collapse', function() {
    $("#headingThree .chevron").addClass('fa-chevron-right').removeClass('fa-chevron-down');
    $("#headingThree").removeClass('bg-success');
  });

$('#collapseFour').on('shown.bs.collapse', function() {
    $("#headingFour .chevron").addClass('fa-chevron-down').removeClass('fa-chevron-right');
    $("#headingFour").addClass('bg-success');
  });

$('#collapseFour').on('hidden.bs.collapse', function() {
    $("#headingFour .chevron").addClass('fa-chevron-right').removeClass('fa-chevron-down');
    $("#headingFour").removeClass('bg-success');
  });

$('#collapseFive').on('shown.bs.collapse', function() {
    $("#headingFive .chevron").addClass('fa-chevron-down').removeClass('fa-chevron-right');
    $("#headingFive").addClass('bg-success');
  });

$('#collapseFive').on('hidden.bs.collapse', function() {
    $("#headingFive .chevron").addClass('fa-chevron-right').removeClass('fa-chevron-down');
    $("#headingFive").removeClass('bg-success');
  });


function generate_order_id(){
    var d = new Date();
    console.log(d)
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var seconds = d.getSeconds();
    var milliseconds = d.getMilliseconds();
    merged_string = date+''+month+''+year+''+hour+''+minute+''+seconds+''+milliseconds
    order_id = parseInt(merged_string)
    document.getElementById("order_id").value = order_id;
}


/* ----------------------------- Set Current Date For Order Date ----------------------- */
function setDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById("order_date").value = today;
}


window.onload = function() {
  setDate();
};
/* ------------------------------------------------------------------------------ */

function calc_volumetric_weight(){
    if (document.getElementById("package_length").value != null){
        if (document.getElementById("package_width").value != null){
            if(document.getElementById("package_height").value != null){
                package_length = document.getElementById("package_length").value;
                package_width = document.getElementById("package_width").value;
                package_height = document.getElementById("package_height").value;
                volumetric_weight = (package_length * package_width * package_height)/5000;
                $("#volumetric_weight").text(volumetric_weight);
                console.log('volumetric_weight',volumetric_weight)
            }
        }
    }
    else{
        volumetric_weight = 0;
        $("#volumetric_weight").text(volumetric_weight);
    }
}



function showShippingTextbox() {
  var shipping_chkbox = document.getElementById("shipping_chkbox");
  var shipping_charge = document.getElementById("shipping_charge");

  if (shipping_chkbox.checked == true){
    shipping_charge.style.display = "block";
  } else {
    shipping_charge.style.display = "none";
  }
}

function showGiftwrapTextbox() {
  var giftwrap_chkbox = document.getElementById("giftwrap_chkbox");
  var giftwrap_charge = document.getElementById("giftwrap_charge");

  if (giftwrap_chkbox.checked == true){
    giftwrap_charge.style.display = "block";
  } else {
    giftwrap_charge.style.display = "none";
  }
}

function showTransactionTextbox() {
  var transaction_chkbox = document.getElementById("transaction_chkbox");
  var transaction_charge = document.getElementById("transaction_charge");

  if (transaction_chkbox.checked == true){
    transaction_charge.style.display = "block";
  } else {
    transaction_charge.style.display = "none";
  }
}

function showDiscountTextbox() {
  var discounts_chkbox = document.getElementById("discounts_chkbox");
  var extra_discount = document.getElementById("extra_discount");

  if (discounts_chkbox.checked == true){
    extra_discount.style.display = "block";
  } else {
    extra_discount.style.display = "none";
  }
}


function setTextCOD(){
  var cod = document.getElementById("cod");
  var payment_method = document.getElementById("payment_method");

  if ($("cod").prop("checked", true)){
    var col_val = $("input[id='cod']:checked").val();
    $("#payment_method").text(col_val);
  }
}

function setTextPrepaid(){
  var prepaid = document.getElementById("prepaid");
  var payment_method = document.getElementById("payment_method");

  if ($("prepaid").prop("checked", true)){
    var prepaid_val = $("input[id='prepaid']:checked").val();
    $("#payment_method").text(prepaid_val);
  }
}


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});



$(document).ready(function(){
    quantity = $('#quantity').val();
    unit_price = $('#unit_price').val();
    tax_rate = $('#tax_rate').val();
    discount = $('#discount').val();
    sub_total = $('#sub_total').val();

    $("#discount").blur(function(){
        if(quantity!=null){
            if(unit_price!=null){
                if(tax_rate!=null){
                    if(discount!=null){
                            sub_total = (quantity*unit_price)+(tax_rate/100)-(discount/100);
                            console.log('quantity', quantity);
                            console.log('unit_price', unit_price);
                            console.log('tax_rate', tax_rate);
                            console.log('discount', discount);
                            console.log('sub_total', sub_total);
                        }
                    else{
                            sub_total = (quantity*unit_price)+(tax_rate/100);
                            console.log('quantity', quantity);
                            console.log('unit_price', unit_price);
                            console.log('tax_rate', tax_rate);
                            console.log('discount', discount);
                            console.log('sub_total', sub_total);
                        }
                    }
                else{
                    sub_total = (quantity*unit_price);
                    console.log('quantity', quantity);
                            console.log('unit_price', unit_price);
                            console.log('tax_rate', tax_rate);
                            console.log('discount', discount);
                            console.log('sub_total', sub_total);
                 }
                }
            else{
                sub_total = 0;
                console.log('quantity', quantity);
                            console.log('unit_price', unit_price);
                            console.log('tax_rate', tax_rate);
                            console.log('discount', discount);
                            console.log('sub_total', sub_total);
            }
        }
        else{
                sub_total = 0;
                console.log('quantity', quantity);
                            console.log('unit_price', unit_price);
                            console.log('tax_rate', tax_rate);
                            console.log('discount', discount);
                            console.log('sub_total', sub_total);
            }
        });
});
