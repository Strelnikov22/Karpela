$(document).ready(function(){
$('#button_hidden').click(function(e){
                
    e.preventDefault();
        
        $(this).hide().prev('#hidden_message').show('slow');

})

$('.read_more_sms').click(function(e){
                
    e.preventDefault();
        
        $(this).hide().next('.hidden_next_sms').show('slow');

})

});




