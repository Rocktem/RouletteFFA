var cards = [//"Flame Orb (self)", "Flame Orb (other)", "Toxic Orb (self)", "Toxic Orb (other)",
             //"Flame Orb (self; all)", "Flame Orb(other; all)", "Toxic Orb(self; all)", "Toxic Orb(other; all)",
             "Reroll", "Reroll All", "Reroll Other", "Reroll All Other",
             "Dynamax"];
var wheels = [["base", 400], ["tea", 44], ["LC", 148]];
var mons = [false, false, false, false, false, false, false, false, false, false, false, false];
var activeWheel = 0;
var rolling = false;
var wheelRolled = false;

function startRoll(ele){
  var id = ele.id;
  if (wheelRolled){
    if (!rolling){
      rolling = true;
      inter = setInterval(function() { randPokemon(id) }, 100);
      window.setTimeout(function(){ clearInterval(inter); rolling = false; mons[parseInt(id.slice(4))-1] = true; cardParity()}, 1000);
    }
    else{
      denyRoll(id);
    }
  }
  else{
    denyRoll2(id);
  }
}

function ranCards(){
  document.getElementById("card1").innerHTML = "Card ["+cards[Math.floor(Math.random() * cards.length)]+"]";
  document.getElementById("card2").innerHTML = "["+cards[Math.floor(Math.random() * cards.length)]+"] Card";
  document.getElementById("card3").innerHTML = "Card ["+cards[Math.floor(Math.random() * cards.length)]+"]";
  document.getElementById("card4").innerHTML = "["+cards[Math.floor(Math.random() * cards.length)]+"] Card";
}

function ranWheel(){
  var index = Math.floor(Math.random() * wheels.length);
  activeWheel = index;
  document.getElementById("currentWheel").innerHTML = "["+wheels[index][0]+"]";
  wheelRolled = true;
}

function randPokemon(id){
  var index = Math.floor(Math.random() * wheels[activeWheel][1]) + 1;
  document.getElementById(id).src = "images/"+wheels[activeWheel][0]+"/"+index + ".png";
}

function denyRoll(id){
  document.getElementById(id).src = "images/block.png";
  window.setTimeout(function(){document.getElementById(id).src = "images/temp.png"}, 1000);
}

function denyRoll2(id){
  document.getElementById(id).src = "images/block2.png";
  window.setTimeout(function(){document.getElementById(id).src = "images/temp.png"}, 1000);
}

function enterName(ele){
  var id = ele.id;
  var key = event.keyCode;
  if (key == 13){
    if (id == "nameEntry1"){
      document.getElementById(id).style.display = 'none';
      document.getElementById("trainerName1").style.display = 'block';
      document.getElementById("trainerName1").innerHTML = document.getElementById(id).value;
    }
    else if (id == "nameEntry2"){
      document.getElementById(id).style.display = 'none';
      document.getElementById("trainerName2").style.display = 'block';
      document.getElementById("trainerName2").innerHTML = document.getElementById(id).value;
    }
    else if (id == "nameEntry3"){
      document.getElementById(id).style.display = 'none';
      document.getElementById("trainerName3").style.display = 'block';
      document.getElementById("trainerName3").innerHTML = document.getElementById(id).value;
    }
    else if (id == "nameEntry4"){
      document.getElementById(id).style.display = 'none';
      document.getElementById("trainerName4").style.display = 'block';
      document.getElementById("trainerName4").innerHTML = document.getElementById(id).value;
    }
  }
}

function cardParity(){
  var allSlotsFilled = true;
  for(var i = 0; i < mons.length; i++) {
    if(!mons[i]){
      allSlotsFilled = false;
    }
    console.log(i+":"+mons[i]);
  }
  if (allSlotsFilled) {
    document.getElementById("ranCard").style.display = 'block';
  }
}

function showRules(){
  var output = "Welcome to Beta 1.2 of the SBS Roulette FFA App.\n"+
               "As you continue to use the app please be aware of the formal way to proceed.\n"+
               "[Enter Names >> Roll the Wheel >> Roll the Pokemon >> Roll the Cards >> Perform the Card Actions >> Have Fun]\n"+
               "Thank you for using this app!\n"+
               "\n"+
               "Changes:\n"+
               "Updated Visuals [Credit: Xander]\n"+
               "Made Screen Responsive [Credit: Xander]\n"+
               "Updated Back-End [Credit: Rocktem]\n"+
               "Made Idiot-Proof [Credit: Rocktem]";
  alert(output);
}
