$(document).ready(function () {
            
            $('#gallery').load( 'gallery/gallery_photo.html' );
            
            $("#dropdown-toggle").click(function(){
                $("#content-navbar").toggleClass("dropdown-active");
            });
            
            $('#gallery-nav-photo').click(function(){
                    $(".content-navbar-active").removeClass("content-navbar-active");
                    $("#gallery").load( 'gallery/gallery_photo.html' );
                    $('#gallery-nav-photo').addClass("content-navbar-active");
                });
            
             $('#gallery-nav-video').click(function(){
                    $(".content-navbar-active").removeClass("content-navbar-active");
                    $("#gallery").load( 'gallery/gallery_video.html' );
                    $('#gallery-nav-video').addClass("content-navbar-active");
                });
            
            $('#gallery-nav-3d').click(function(){
                $(".content-navbar-active").removeClass("content-navbar-active");
                $('#gallery').load( 'gallery/gallery_3d.html' );
                $('#gallery-nav-3d').addClass("content-navbar-active");
                });
            
            $('#start-screen-nav-photo').click(function(){
                    $(".content-navbar-active").removeClass("content-navbar-active");
                    $("#gallery").load( 'gallery/gallery_photo.html' );
                    $('#gallery-nav-photo').addClass("content-navbar-active");
                });
            
             $('#start-screen-nav-video').click(function(){
                    $(".content-navbar-active").removeClass("content-navbar-active");
                    $ ("#gallery").load( 'gallery/gallery_video.html' );
                    $('#gallery-nav-video').addClass("content-navbar-active");
                });
            
            $('#start-screen-nav-3d').click(function(){
                $(".content-navbar-active").removeClass("content-navbar-active");
                $('#gallery').load( 'gallery/gallery_3d.html' );
                $('#gallery-nav-3d').addClass("content-navbar-active");
                });
            
            
        });