/*
 * fontsizer.js
 *
 * http://codepen.io/ianfarb/pen/sxbvk
 */
$(document).ready(function(){
  
  $("#small").click(function(event){
    event.preventDefault();
    $("h3").animate({"font-size":"16px"});
    $("table").animate({"font-size":"12px"});
    $("p").animate({"font-size":"12px", "line-height":"16px"});
    
  });
  
  $("#medium").click(function(event){
    event.preventDefault();
    $("h3").animate({"font-size":"24px"});
    $("table").animate({"font-size":"16px"});
    $("p").animate({"font-size":"14px", "line-height":"20px"});
    
  });
  
  $("#large").click(function(event){
    event.preventDefault();
    $("h3").animate({"font-size":"32px"});
    $("table").animate({"font-size":"18px"});
    $("p").animate({"font-size":"18px", "line-height":"20px"});
    
  });
  
  $( "a" ).click(function() {
   $("a").removeClass("selected");
  $(this).addClass("selected");
  
 });

});