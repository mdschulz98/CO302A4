function adjustHeight() {
    document.getElementById('story_text').style.height = document.defaultView.getComputedStyle(document.getElementById('option1'), "").getPropertyValue("height");
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }