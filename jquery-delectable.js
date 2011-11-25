(function ( $ ) {
    $.fn.delectable = function() {
        $(this).click(function() {
            $(this)[0].focus();
            $(this)[0].select();
        });
    }
    
})( jQuery )

