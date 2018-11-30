$(document).ready(function() {
  $("#catch-zzz").click(function() {
    calculateSleepTimes();
  }); 
});

function calculateSleepTimes(){
  $("#times").hide().fadeOut(500, function() { $(this).empty(); });
  var wakeUpTime = new Date();
  var hour = $( "#hour" ).val();
  var minute = $( "#minute" ).val();
  var hourPeriod = document.querySelector('input[name="12-hr-period"]:checked').value;
  
  if(hour == 12) {
      hour = 0;
  }

  if(hourPeriod == "AM") {
      wakeUpTime.setHours(hour);
  } else{
      wakeUpTime.setHours(hour + 12);
  }
  wakeUpTime.setMinutes(minute);
  
  var time1 = new Date(wakeUpTime.getTime() - 270*60000);
  var time2 = new Date(time1.getTime() - 90*60000);
  var time3 = new Date(time2.getTime() - 90*60000);
  var time4 = new Date(time3.getTime() - 90*60000);
  
  var timeDisplay1 = formatTime(time4); 
  var timeDisplay2 = formatTime(time3); 
  var timeDisplay3 = formatTime(time2); 
  var timeDisplay4 = formatTime(time1);
  
  $("#times").append(timeDisplay1).hide().fadeIn(500);
  $("#times").append(timeDisplay2).hide().fadeIn(500);
  $("#times").append(timeDisplay3).hide().fadeIn(500);
  $("#times").append(timeDisplay4).hide().fadeIn(500);
}

function formatTime(time){
  var result = "";
  var hour = time.getHours();
  
  if(hour > 12){
    result = result + (hour - 12);
  } else if (hour == 0){
    result = result + "12";
  } else{
    result = result + hour;
  }
  
  var result = result + ":";
  var minutes = time.getMinutes();
  if(time.getMinutes() < 10) {
      result = result + "0" + minutes;
  } else {
      result = result + minutes;
  }
  
  if(hour >= 12){
   result = result + " pm";
  } else{
   result = result + " am";
  }
  
  return "<span class='recommended-sleep-time'>" 
         + result + "</span>";
}

