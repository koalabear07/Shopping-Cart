window.$("#one").on("click", function () {changeSlide("#qout-one", "#one");});
window.$("#two").on("click", function () {changeSlide("#qout-two", "#two");});
window.$("#three").on("click", function () {changeSlide("#qout-three", "#three");});
window.$("#four").on("click", function () {changeSlide("#qout-four", "#four");});

//================== Function =====================

function changeSlide(qout,circle){
  window.$(qout).siblings().hide();
  window.$(qout).fadeIn(2000);
  window.$(circle).css("background-color", "#888");
  window.$(circle).siblings().css("background-color", "#fff");
}