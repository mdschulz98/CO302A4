function adjustHeight() {
    document.getElementById('story_text').style.height = document.defaultView.getComputedStyle(document.getElementById('option1'), "").getPropertyValue("height");
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
    document.getElementById(elementId).innerHTML = textToPrepend + document.getElementById(elementId).innerHTML;
  }

function enterListen() {
  document.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
      document.getElementById("entrance_button").click();
    }
  });
}