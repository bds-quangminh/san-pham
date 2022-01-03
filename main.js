window.onload = function() {
  var scale = document.getElementById("video").height / document.getElementById("video").width;
  var width = window.screen.width;
  var height = width * scale;
  document.getElementById("video").width = width;
  document.getElementById("video").height = height;
};

function oncall() {
  window.open('tel:0856130195', '_self');
}