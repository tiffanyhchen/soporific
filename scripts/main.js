$(document).ready(function(){
  $activePage = $("nav li a[href*='" + location.pathname + "']");
  console.log($activePage);
  $activePage.addClass("active-page");
});