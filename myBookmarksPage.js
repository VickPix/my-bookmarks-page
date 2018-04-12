;(function(){

var css, elements, structure, mypage;

var init = function(){

  // Inject the page
  setupPage();

  // Fill the Div
  fillPage();

  // Update the Div
  // window.addEventListener('resize', fillVars);

}

var fillPage = function(){

}

var setupPage = function(){
  mypage = window.open("");
  mypage.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
};

init();

})(window);