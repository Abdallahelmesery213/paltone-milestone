
$(function (){

    // show password
    $('#show-icon').on('click', function(){
        var passInput=$("#show-pass");
        if(passInput.attr('type')==='password')
          {
            passInput.attr('type','text');
        }else{
           passInput.attr('type','password');
        }
    })

    // Date Picker
	$('#datetimepicker').datepicker({
		weekStart: 0,
		todayBtn: "linked",
		language: "es",
		orientation: "bottom auto",
		keyboardNavigation: false,
		autoclose: true
	});

    // popup 
    $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
    });


    // multiple select of ads 
    $(".chosen-select").chosen({
        no_results_text: "Oops, nothing found!"
    })
    
    
        

   

});
