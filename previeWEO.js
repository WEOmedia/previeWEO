jQuery(document).ready(function($){

$("body").append ( `
    <div class="demo-style-switch" id="switch-style">
		<a id="toggle-switcher" class="switch-button" title="Change Styles"><span class="fa fa-cogs"></span></a>
		<div class="switched-options">
			<div class="config-title">
				Colors :
			</div>
			<ul class="styles">
				<li>
				<div class="main color" id="main">
				</div></li>
				<li>
				<div class="yellow color" id="yellow">
				</div>
				</li>
				<li>
				<div class="purple color" id="purple">
				</div>
				</li>
				<li>
				<div class="blue color" id="blue">
				</div>
				</li>
				<li>
				<div class="brown color" id="brown">
				</div>
				</li>
			</ul>
		</div>
	</div>
` );


(function ($j) {

  switch_style = {

    onReady: function () {      
      this.switch_style_click();
    },
    
    switch_style_click: function(){
    	$(".color").click(function(){
    		var id = $(this).attr("id");
    		
    		$("#color-switch").attr("href", "../tpn/c/C969/docs/" + id + ".css");    		
    	});
    },
  };

  $j().ready(function () {
	  switch_style.onReady();
  });

})(jQuery);


/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
 $(document).ready(function(){
 $('#toggle-switcher').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'left':'-220px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'left':'0'});
		}
	});
});



});
