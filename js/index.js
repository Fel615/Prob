const menu = document.querySelector('#js-info');
const nav = document.querySelector('#js-nav');

menu.addEventListener('click', function () {

  menu.classList.toggle('active');
  nav.classList.toggle('active');

});

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

//768px以上のみライブラリを読み込む場合はif前と一番最後のコメントを外してください
if(matchMedia('(min-width: 768px)').matches){
  luxy.init();
  } 