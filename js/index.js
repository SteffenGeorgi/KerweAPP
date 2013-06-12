/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    }
};

	function getContent_HomeWeather() {
		$.getJSON('http://hemsbach.ohost.de/server/requests.php', function(data) {
			$.each(data, function(i, item) {
				$("#weather-" + data[i].day + " .label-temp").html( data[i].temp + ' <span class="icon-temp" data-font-icon="&#xe191;"></span>');
			});
		});
		console.log("Get Weather");
	}

	// P2R: HOME
	$(document).delegate("#page-home", "pageinit", function(event){
		/*
		$(".iscroll-wrapper", this).bind({
			iscroll_onpulldown: function(event, data){
				getContent_HomeWeather(); 
				data.iscrollview.refresh();
			}
		});
		*/
		getContent_HomeWeather();
	});
	
	$(document).on('pageinit', '#page-kerwegasse', function(){  
		$('.flexslider').flexslider({
			animation: "slide",
			slideshow: false,
			animationLoop: false, 
			animationSpeed: 150,            //Integer: Set the speed of animations, in milliseconds
			useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
			touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
			keyboard: true,
			controlsContainer: "#kerwegasse-nav",
			controlNav: true, 
		});
	});
	
	$(document).on('pageinit', '#page-medien', function(){  
		$( function() {
        	$( 'audio' ).audioPlayer();
    	});
	});

	$(document).bind( "mobileinit", function() {
		$.support.cors = true;
		$.mobile.allowCrossDomainPages = true; 
	});

	// Panel left
	
	$(document).on("pageinit", function() {
		$( document ).on( "swipeleft swiperight", function( e ) {
			// We check if there is no open panel on the page because otherwise
			// a swipe to close the left panel would also open the right panel (and v.v.).
			// We do this by checking the data that the framework stores on the page element (panel: open).
			if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
				if ( e.type === "swipeleft"  ) {
					$( "#right-panel" ).panel( "open" );
				} else if ( e.type === "swiperight" ) {
					$( "#left-panel" ).panel( "open" );
				}
			}
		});
	});
	


// :: PAGE-EVENTS 
// Filter
$("#button-events-fr").click(function() {
	if($(this).hasClass("active")) {
		$("#content-events-list li").slideDown();
		$(this).removeClass("active");
	} else {
		$("#button-events-sa").removeClass("active");
		$("#button-events-so").removeClass("active");
		$("#button-events-mo").removeClass("active");
		$(this).addClass("active");
		$("#content-events-list li").not(".events-fr").slideUp();
		$("#content-events-list li.events-fr").slideDown();
	}
});
$("#button-events-sa").click(function() {
	if($(this).hasClass("active")) {
		$("#content-events-list li").slideDown();
		$(this).removeClass("active");
	} else {
		$("#button-events-fr").removeClass("active");
		$("#button-events-so").removeClass("active");
		$("#button-events-mo").removeClass("active");
		$(this).addClass("active");
		$("#content-events-list li").not(".events-sa").slideUp();
		$("#content-events-list li.events-sa").slideDown();
	}
});
$("#button-events-so").click(function() {
	if($(this).hasClass("active")) {
		$("#content-events-list li").slideDown();
		$(this).removeClass("active");
	} else {
		$("#button-events-fr").removeClass("active");
		$("#button-events-sa").removeClass("active");
		$("#button-events-mo").removeClass("active");
		$(this).addClass("active");
		$("#content-events-list li").not(".events-so").slideUp();
		$("#content-events-list li.events-so").slideDown();
	}
});
$("#button-events-mo").click(function() {
	if($(this).hasClass("active")) {
		$("#content-events-list li").slideDown();
		$(this).removeClass("active");
	} else {
		$("#button-events-fr").removeClass("active");
		$("#button-events-sa").removeClass("active");
		$("#button-events-so").removeClass("active");
		$(this).addClass("active");
		$("#content-events-list li").not(".events-mo").slideUp();
		$("#content-events-list li.events-mo").slideDown();
	}
});