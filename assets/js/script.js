(function($){
    $('.show-modal').click(function(event){
        event.preventDefault();
        $('.modal-content').show();
    }); 
    $('.close-modal').click(function(event){
        event.preventDefault();
        $('.modal-content').hide();
    });        
})(jQuery);