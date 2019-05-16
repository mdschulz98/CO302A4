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
      document.getElementById("37").click();
    }
    else if (e.keyCode === 39) {
      storechoice(e.keyCode);
      document.getElementById("39").click();
    }
  });
}

function storechoice(id) {
  var cookie = "sel=" + id.toString();
  document.cookie = cookie;
}

function driveby() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Luckily, this is just a harmless text file.'));
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

function fixlink(id) {
  var link = document.getElementById(id);
  link.setAttribute('href', './oops.html');
}

function getsel(page) {
    var element = document.getElementById("user_choice");
    element.innerHTML = determineText(page);
}

function determineText(page) {
  var no_sup = "Cookies not supported";
  var sel;
  var name = "sel=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        sel=c.substring(name.length, c.length);
      }
    }
  switch(page) {
    case 1: 
      if(parseInt(sel) === 37){
        return "Nice! That email is absolutely fake.";
      }
      else if(parseInt(sel) === 39) {
        return "Darn! Turns out that email is fake, let's look at why.";
      }
      break;
    case 2:
      if(parseInt(sel) === 37) {
        return "Correct! This webpage is a complete forgery.";
      }
      else if(parseInt(sel) === 39){
        return "Not quite. But it looks so real, right?";
      }
      break;
    case 3:
      if(parseInt(sel) === 37) {
       return "Good! That's a very important step in home security many people miss.";
      }
      else if(parseInt(sel) === 39){
        return "Hmm, I would rethink that answer.";
      }
      case 4:
      if(parseInt(sel) === 37) {
       return "That is not a very safe choice.";
      }
      else if(parseInt(sel) === 39){
        return "Smart! Stay away from wifi you don't know the source of.";
      }
      case 5:
      if(parseInt(sel) === 37) {
       return "I don't recommend that!";
      }
      else if(parseInt(sel) === 39){
        return "Correct! These sites are very fake.";
      }
      default: break;

  }
  return no_sup;
}

