$( document ).ready(function() {
    var page = document.location.href.match(/[^\/]+$/)[0];
    console.log(page);

    var lis = $('.c-gnav').find('li');
    if(page != 'index.html' || page != ''){
        lis.each(function( index ) {
            var name = $(this).data('name')+'.html';
            if(name==page){
                lis.removeClass('is-active');
                $(this).addClass('is-active');
            }
        });
    }

});
