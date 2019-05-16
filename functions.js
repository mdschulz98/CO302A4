function adjustHeight() {
    document.getElementById('story_text').style.height = document.defaultView.getComputedStyle(document.getElementById('option1'), "").getPropertyValue("height");
}

function adjust2() {
  document.getElementById('option2').style.height = document.defaultView.getComputedStyle(document.getElementById('option1'), "").getPropertyValue("height");
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function linkclicked(id) {
    var cookie = "choice=" + id.toString();
    document.cookie = cookie;
}

function getChoice() {
    var name = "choice=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        prependById('prev_choice_story',choiceToText((c.substring(name.length, c.length))));
      }
      else {
        prependById('prev_choice_story', "I have no idea what you picked.");
      }
    }
  }

  function choiceToText(choice) {
    switch(parseInt(choice)) {
      case 1: return "You picked Jonathan Decker, a wonderful choice!";
      case 2: return "Why on earth would you pick Timothy? One course on blockchain a security master does not make.";
      case 3: return "You picked Frank Stowalstalk, hoping that years of experience really make the difference.";
      default: return "I have no idea what you picked.";
    }
  }

  function prependById(elementId, textToPrepend) {
    document.getElementById(elementId).innerHTML = textToPrepend + " " + document.getElementById(elementId).innerHTML;
  }

function enterListen() {
  document.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
      document.getElementById("entrance_button").click();
    }
  });
}

function rightandleft() {
  document.addEventListener("keyup", function(e) {
    if(e.keyCode === 37) {
      storechoice(e.keyCode);
      document.getElementById("real").click();
    }
    else if (e.keyCode === 39) {
      storechoice(e.keyCode);
      document.getElementById("fake").click();
    }
  });
}

function storechoice(id) {
  var cookie = "sel=" + id.toString();
  document.cookie = cookie;
}

function driveby() {
   alert("driveby");
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('This could have been so much worse!'));
    element.setAttribute('download', randomFilename());
    element.style.display = 'none';
    document.body.append(element);
    element.click();
    document.body.removeChild(element);
}

function randomFilename() {
  var length = Math.floor((Math.random()) * 16) + 10;
  var filename = "";
  for (var i=0;i<length;++i) {
    var letter = randomLetter(); 
    filename += String.fromCodePoint(letter);
  }
  filename += '.txt';
  return filename;
}

function randomLetter() {
  if(Math.round(Math.random())) {
    return Math.floor((Math.random() * 26)) + 97;
  }
  else {
    return Math.floor((Math.random() * 26)) + 65;
  }
}