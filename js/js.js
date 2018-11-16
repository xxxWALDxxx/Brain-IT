$(document).ready(function(){
  var link=$('.menu-link');
  var link_active=$('.menu-link-active');
  var menu=$('.menu');
  var nav_link=$('.menu a');
  link.click(function(){
    link.toggleClass('menu-link-active');
    menu.toggleClass('menu-active');
  });
  nav_link.click(function(){
    link.toggleClass('menu-link-active');
    menu.toggleClass('menu-active');
  });
});
function changeItem_item1() {
  document.getElementById('imac-img-display').style.background = 'green';
}
function changeItem_item2() {
  document.getElementById('imac-img-display').style.background = 'white';
}
function changeItem_item3() {
  document.getElementById('imac-img-display').style.background = '#222222';
}
function changeItem_item4() {
  document.getElementById('imac-img-display').style.background = '#333333';
}
function changeItem_item5() {
  document.getElementById('imac-img-display').style.background = '#444444';
}
function changeItem_item6() {
  document.getElementById('imac-img-display').style.background = '#666666';
}
function changeItem_item7() {
  document.getElementById('imac-img-display').style.background = 'green';
}
function changeItem_item8() {
  document.getElementById('imac-img-display').style.background = 'black';
}
function changeItem_item9() {
  document.getElementById('imac-img-display').style.background = 'yellow';
}
function rechangeItem() {
  document.getElementById('imac-img-display').style.background = 'transparent';
}