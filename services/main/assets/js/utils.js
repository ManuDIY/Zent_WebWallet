const THRESHOLD = 5;
function httpGet (theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

/*function copy_ele (eleid) {
    let copyText = document.getElementById(eleid);
    let input = document.getElementById("temp_input");
    input.value = copyText.textContent;
    input.select();
    document.execCommand("copy");
}*/
function copy_ele (eleid) {
  let copyText = document.getElementById(eleid);
  let input = document.getElementById("temp_input");
  input.value = copyText.textContent;
  if(navigator.userAgent.match(/ipad|ipod|iphone/i)){
    var el = document.getElementById('temp_input');
    var oldContentEditable = el.contentEditable,
      oldReadOnly = el.readOnly,
      range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;
  } else {
    input.select();
  }
  document.execCommand("copy");
}
