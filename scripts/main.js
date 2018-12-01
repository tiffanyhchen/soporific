/* Show active page on navigation */
$(document).ready(function(){
  $('nav li a[href="/' + location.pathname.split("/")[1] + '"]').addClass('active-page');
});