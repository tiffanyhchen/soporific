// Get the modal
var modal = document.getElementById('main-modal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var content = [
  {
    "icon": "clock",
    "title": "have a regular schedule",
    "description": "Stick to a sleep schedule of the same bedtime and wake up time, even on the weekends. This helps to regulate your body's clock and could help you fall asleep and stay asleep for the night. Try using built in features on your iPhone's clock to regulate your sleep patterns."
  },
  {
    "icon": "phone",
    "title": "avoid devices",
    "description": "Electronic devices produce blue light. The reason that blue light is so problematic is that it has a short wavelength that affects levels of melatonin more than any other wavelength does. Try powering down electronics, including the TV, an hour or two before bedtime so your body can start producing more melatonin. "
  },
  {
    "icon": "exercise",
    "title": "exercise",
    "description": "Exercise daily. Vigorous exercise is best, but even light exercise is better than no activity. Exercise at any time of day, but not at the expense of your sleep. It helps you get excess energy out, but make sure not to exercise to close to bedtime!"
  },
  {
    "icon": "temperature",
    "title": "set a cool temperature",
    "description": "Evaluate your room. Design your sleep environment to establish the conditions you need for sleep. Your bedroom should be cool – between 60 and 67 degrees. Your bedroom should also be free from any noise that can disturb your sleep. Finally, your bedroom should be free from any light. Check your room for noises or other distractions. This includes a bed partner's sleep disruptions such as snoring. Consider using blackout curtains, eye shades, ear plugs, white noise machines, humidifiers, fans and other devices."
  },
  {
    "icon": "bed",
    "title": "have a comfortable bed",
    "description": "Sleep on a comfortable mattress and pillows. Make sure your mattress is comfortable and supportive. The one you have been using for years may have exceeded its life expectancy – about 9 or 10 years for most good quality mattresses. Have comfortable pillows and make the room attractive and inviting for sleep but also free of allergens that might affect you and objects that might cause you to slip or fall if you have to get up."
  },
  {
    "icon": "yawn",
    "title": "relax and rewind",
    "description": "Practice a relaxing bedtime ritual. A relaxing, routine activity right before bedtime conducted away from bright lights helps separate your sleep time from activities that can cause excitement, stress or anxiety which can make it more difficult to fall asleep, get sound and deep sleep or remain asleep. Try reading a book, doing deep breathing, or taking a nice bath."
  }
]

function showModal(identifier){
  var description = "";
  var title = "";
  var modal = document.getElementById('main-modal');
  
  for(var x = 0; x < content.length; x++){
    if(content[x].icon == identifier){
      description = content[x].description;
      title = content[x].title;
    }
  }
  
  console.log(description);
  console.log(title);
  document.getElementById('modal-paragraph').innerHTML = description;
  document.getElementById('modal-title').innerHTML = title;
  modal.style.display = "block";
  document.getElementById("main-content").style.filter="blur(10px)";
}

function closeModal(){
  var modal = document.getElementById('main-modal');
  modal.style.display = "none";
  document.getElementById("main-content").style.filter="none";
}