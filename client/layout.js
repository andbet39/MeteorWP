

Template.layout.rendered = function(){

        var previousScroll = 0,
            navBarOrgOffset = $('#navbar').offset().top;

        $('#navigation').height($('#navbar').height());

        $(window).scroll(function() {
            var currentScroll = $(this).scrollTop();
            console.log(currentScroll + " and " + previousScroll + " and " + navBarOrgOffset);
            if(currentScroll > navBarOrgOffset) {
                if (currentScroll > previousScroll) {
                    $('#navbar').fadeOut();
                } else {
                    $('#navbar').fadeIn();
                    $('#navbar').addClass('fixed');
                }
            } else {
                $('#navbar').removeClass('fixed');
            }
            previousScroll = currentScroll;
        });


};