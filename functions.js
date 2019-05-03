function adjustHeight() {
    document.getElementById('story_text').style.height = document.defaultView.getComputedStyle(document.getElementById('option1'), "").getPropertyValue("height");
    document.getElementById('option1').style.height = document.getElementById('story_text') - 1;
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
        prependById('prev_choice_story',"You picked option: " + c.substring(name.length, c.length) + "\n")
      }
      else {
        prependById('prev_choice_story', "I have no idea what you picked.\n");
      }
    }
  }

  function prependById(elementId, textToPrepend) {
    document.getElementById(elementId).innerHTML = textToPrepend + document.getElementById(elementId).innerHTML;
  }