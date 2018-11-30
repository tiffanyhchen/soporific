$(document).ready(function(){
  $activePage = $("nav li a[href*='sporific/" + location.pathname + "']");
  console.log($activePage);
  $activePage.addClass("active-page");
});