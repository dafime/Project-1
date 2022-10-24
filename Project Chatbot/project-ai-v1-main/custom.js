$(document).ready(function(){
    $('.chaticon').click(function(event){
        $('.chatbox').toggleClass('active');
    });
    $('.conv-form-wrapper').convform({selectInputStyle: 'disable'});
})

