

window.onload = init;

function init() {

	$('#form').submit(function (e) {
		
   		 e.preventDefault();

   		 var form = this;

   		 $(".overlay-container").fadeIn(1000, function(){
 
   		 		showformValues(form);

   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 })
	});

}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function showformValues(form){

	var formValues = $(form).serializeArray(); 
		
	$.each(formValues, function(index, field){

		$("#results").find("#"+field.name+"_result").text(field.value);

		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	});				
}
