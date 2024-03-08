let describeButton = document.getElementById('describeButton');
let divButton = document.getElementById('divButton')
let input = document.getElementById('input');
let hide = document.getElementsByClassName('hide');
let text = document.getElementById('text');
let yourself = document.getElementById('yourself');
let posts = [];
function classHide() { 
  //Adds/Removes classes
 if(input.classList.contains("hide")) {
  input.classList.remove('hide')
  divButton.classList.add('hide')
  yourself.classList.add('hide')
  text.value == '';
 }
  else {
  input.classList.add('hide');
  divButton.classList.remove('hide')
  yourself.classList.remove('hide')
  aboutYourself();
 }
}
function aboutYourself() {
  //displaying inputted text if not empty 
  text
  if(!text.value == '') {
    //console.log('works')
    yourself.innerHTML = text.value;
    posts.unshift(text.value);
    console.log(posts.value);
    //displaying '' if nothing is there
  } else {
    yourself.innerHTML = '';
  }
}
