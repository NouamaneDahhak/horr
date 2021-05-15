
$(document).ready(function() {

	"use strict";
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	}); 
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


/*-- =============================================== -->
<!-- ========== bootstrap scrollspy ========== -->
<!-- =============================================== --> */
    
    
    $('body').scrollspy({
    	target: '.navbar',
    	offset: 160
    });



/*<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->*/

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });



/*<!-- =============================================== -->
<!-- ========== scrolldown.js ========== -->
<!-- =============================================== -->*/

$('.scrolldown a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


/*<!-- =============================================== -->
<!-- ========== navbardown.js ========== -->
<!-- =============================================== -->*/

$('.nav a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top -0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});






/*<!-- =============================================== -->
<!-- ========== fancy box ========== -->
<!-- =============================================== -->*/



//
//	$(".youtube-media").on("click", function(e) {
//		var jWindow = $(window).width();
//		if (jWindow <= 410) {
//			return;
//		}
//		$.fancybox({
//			href: this.href,
//			padding: 4,
//			type: "iframe",
//			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
//		});
//		return false;
//	});



/*<!-- =============================================== -->
<!-- ========== portfolio section ========== -->
<!-- =============================================== -->*/



$('#portfolio a').nivoLightbox({
	effect: 'fadeScale'
});



/*<!-- =============================================== -->
<!-- ========== owlcarousel team ========== -->
<!-- =============================================== -->*/



	
	$(".gallery_carousel").owlCarousel({

		/*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],

		pagination : true,
		paginationNumbers: false,


		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window

	});



	$(".main_testimonial_text").owlCarousel({

	/*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
	items :1,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
	pagination : true,
	paginationNumbers: false,
	singleItem:true,
	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window

	});


 new WOW().init();
    $('.js-example-basic-multiple').select2();





let cars = [
 /* {
    "title": "كسوة",
    "description": "كسوة سخونة ديال البرد",
    "size": ["m","l","xl"],
    "id": 1,
	"img" : '1.jpg',
	"price":'400',
	"pricediscount":'299',
	"sizechoise":''
  }, {
    "title": "كسوة",
    "description": "كسوة سخونة ديال البرد",
    "size": ["m","l","xl"],
    "id": 2,
	"img" : '2.jpg',
	"price":'400',
	"pricediscount":'299',
	"sizechoise":''
  }, {
    "title": "كسوة",
    "description": "كسوة سخونة ديال البرد",
    "size": ["m","l","xl"],
    "id": 3,
	"img" : '3.jpg',
	"price":'400',
	"pricediscount":'299',
	"sizechoise":''
  }, {
    "title": "كسوة",
    "description": "كسوة سخونة ديال البرد",
    "size": ["m","l","xl"],
    "id": 4,
	"img" : '4.jpg',
	"price":'400',
	"pricediscount":'299',
	"sizechoise":''
  }, {
    "title": "كسوة",
    "description": "كسوة سخونة ديال البرد",
    "size": ["m","l","xl"],
    "id": 5,
	"img" : '5.jpg',
	"price":'400',
	"pricediscount":'299',
	"sizechoise":''
  }
   
  
  
 */
]

cars.forEach(car => {
            var sizes = ''

				for (var i = 0; i < car.size.length; i++) {
					
					
			sizes+=	'<div class="form-check form-check-inline">                                                                  '+
					'							  <input class="form-check-input" type="radio" name="radio'+car.id+'" id="inlineRadio1" value="'+car.size[i]+'"> '+
					'							  <label class="form-check-label" for="inlineRadio1">'+car.size[i]+'</label>                                              '+
					'							</div>                                                                                                      ';
				} 
				
				console.log(sizes);

	document.getElementById("products").innerHTML +=         

'									<div class="col-sm-6 col-xs-12">                                         '+
'										<div class="single_works_2_text">                                    '+
'											<i><img src="images/icon1.png" alt="" />	</i>                 '+
'											<div class="text_deatels">                                       '+
'												<h3>'+car.title+'</h3>                                       '+
'												<p>- حالات العقم و تنظيم الإخلال الهرموني  عند ‎الرجال و‏ المراة  '+
'<br>- يفيد حالات الضعف الجنسي                                                                                '+
'<br>- علاج جيد لأمراض الكيد                                                                                   '+
'<br>- يقلل من احتمال الإصابة بمرض السرطان                                                                    '+
'<br>- مصدر أساسي للطاقة ومفيد لأصحاب الارهاق                                                                  '+
'</p>                                                                                                        '+
'											</div>                                                           '+
'										</div>                                                               '+
'									</div>                                                                   '
			  


});



let command = [];
function  addtocard(id){
	
	     
            var radioValue = $("input[name='radio"+id+"']:checked").val();
            if(radioValue){

            }
			else {
				radioValue = "";
			}
       
		
		
	
	let car = cars.find(car => car.id === id);
	command.push(
			  {
			"title"        : car.title,
			"description"  : car.description,
			"size"         : car.size,
			"id"           : car.id,
			"img"          : car.img,
			"price"        : car.price,
			"pricediscount": car.pricediscount,
			"sizechoise":radioValue,


		  }
	    )
	
	console.log(command);

	document.getElementById("order-info-content").innerHTML += 
	   "<div class='line'></div>"                                                                                             + 
				
      " <table  class='order-table product-cart-"+car.id+"'>                                                                                          "+
      "      <tr>                                                                                                            "+
      "        <td><img src='img/services/"+car.img+"' class='full-width'></img>       "+
      "        </td>                                                                                                         "+
      "        <td>                                                                                                          "+
      "          <br> <span class='thin'>"+car.title+"</span>                                                                         "+
      "          <br> <span class='thin small'> "+radioValue+"<br><br></span>         "+
      "        </td>    <td><a href= '#call-to-action' class='button-add' onclick='delete_product("+car.id+")'><i class='fa fa-trash'></i> </a></td>                                                                                                     "+
	  "                                                                                                                      "+
      "      </tr>                                                                                                           "+
      "      <tr>                                                                                                            "+
      "        <td>                                                                                                          "+
      "          <div class='price'>"+car.pricediscount+" DH</div>                                                                             "+
      "        </td>                                                                                                         "+
      "      </tr>                                                                                                           "+
      "    </tbody>                                                                                                          "+
      "  </table>  "                                                                                                          
}
function delete_product(id){
	var destArr=[];
        for(i in command){ 
          if(command[i].id!=id) 
                destArr[i]=command[i];
          }
        // destJson contains the content excluding node with 3.jpg
        //You can replace the original content with destJson
        command=destArr; 
		console.log(command);
		$(".product-cart-"+id).html('')
}

$(".button-submit").click(function(){
	
	var array = []

	$("input:checkbox[name=type]:checked").each(function(){
        array.push($(this).val() + "+++++++++");
    });
	
							
						 var Name          = $("input[name=Name]").val();
						 var Phone         = $("input[name=Phone]").val();
						 var Adresse       = $("input[name=Adresse]").val();
						 var title         =$("input[name=msg]").val();
						 var description   = array.toString();
						
						 
						 $.ajax('https://script.google.com/macros/s/AKfycbzMj2icEGYmB2840WFWTKIKxWCpwdjxDq0VIvhvOmjkX19uUM0/exec', {
							type: 'POST',  // http method
							data: { 
								Name           : Name           ,
								Phone          : Phone          ,
								Adresse        : Adresse        ,
								title          : title          ,
								description    : description    ,
								

							},  // data to submit
							success: function (data, status, xhr) {
								 alert("قد تم تسجيل طلبكم بنجاح. سنتواصل معكم لتأكيد طلبكم")
								},
							error: function (jqXhr, textStatus, errorMessage) {
								 alert("error")
							}
						});
	
})

/*
$("button").click(function(){
    
    if($("input[name=Phone]").val() == ""){
        alert("phone requ");
    }
    else{
       if(command.length == 0){
		
		                 Name          = $("input[name=Name]").val();
						 Phone         = $("input[name=Phone]").val();
						 Adresse       = $("input[name=Adresse]").val();
						 
						 
		$.ajax('https://script.google.com/macros/s/AKfycbzMj2icEGYmB2840WFWTKIKxWCpwdjxDq0VIvhvOmjkX19uUM0/exec', {
							type: 'POST',  // http method
							data: { 
								Name           : Name           ,
								Phone          : Phone          ,
								Adresse        : Adresse        ,
								
							},  // data to submit
							success: function (data, status, xhr) {
								 alert("قد تم تسجيل طلبكم بنجاح. سنتواصل معكم لتأكيد طلبكم")
								},
							error: function (jqXhr, textStatus, errorMessage) {
								 alert("error")
							}
						});
	}
			else{
			command.forEach(cmd => {
				
				
						

							
						 Name          = $("input[name=Name]").val();
						 Phone         = $("input[name=Phone]").val();
						 Adresse       = $("input[name=Adresse]").val();
						 title         = cmd.title;
						 description   = cmd.description;
						 size          = cmd.size.join(", ");
						 id            = cmd.id;
						 img           = cmd.img;
						 price         = cmd.price;
						 pricediscount = cmd.pricediscount;
						 sizechoise   = cmd.sizechoise;
						 
						 $.ajax('https://script.google.com/macros/s/AKfycbzMj2icEGYmB2840WFWTKIKxWCpwdjxDq0VIvhvOmjkX19uUM0/exec', {
							type: 'POST',  // http method
							data: { 
								Name           : Name           ,
								Phone          : Phone          ,
								Adresse        : Adresse        ,
								title          : title          ,
								description    : description    ,
								size           : size           ,
								id             : id             ,
								img            : img            ,
								price          : price          ,
								pricediscount  : pricediscount  ,
								sizechoise     : sizechoise     ,

							},  // data to submit
							success: function (data, status, xhr) {
								 alert("قد تم تسجيل طلبكم بنجاح. سنتواصل معكم لتأكيد طلبكم")
								},
							error: function (jqXhr, textStatus, errorMessage) {
								 alert("error")
							}
						});

		})	
	} 
    }
	
	

			
	
});
*/


$(".hexagon").click(function (e) {  
 //$(this).siblings(":last").hide(); 
  var $checkbox = $(this).prev();
        $checkbox.prop('checked', !$checkbox.prop('checked'));
    if (!$(e.target).is('input:checkbox')) {
      
    }
});


}); 






//<!-- =============================================== -->
//<!-- ========== Navbar ========== -->
//<!-- =============================================== -->


	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var batas = 800;
                var logo = 'images/logo.png';
                var logoScroll = 'images/logo2.png';
	  //alert(batas);
	  
	  if (top > batas) {
		jQuery('.main-menu').addClass('tiny');
		jQuery('.main-menu').css('opacity','1');
        jQuery('.navbar-brand img').attr('src',logoScroll);
	  } else {
	   jQuery('.main-menu').removeClass('tiny'); 
        jQuery('.navbar-brand img').attr('src',logo);
	  }
	});


//
//<!-- =============================================== -->
//<!-- ========== Map ========== -->
//<!-- =============================================== -->


$(document).ready(function() {


 google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ec46c0"},{"visibility":"on"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }


});	


function add_to_card(val) {
	$('.js-example-basic-multiple').val(val);
    $('.js-example-basic-multiple').trigger('change');
}