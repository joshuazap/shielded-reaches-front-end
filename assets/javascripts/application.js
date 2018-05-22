// This is where you should bootstrap your JS app
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require scaffold
//= require dropzone
//= require bootstrap
//= require messages
//= require_self
//= require_tree .

var mouseover_search;
mouseover_search = function() {

  $(".unmoused-search").show();
  $(".moused-search").hide();

  $(".unmoused-search").mouseenter(function() {
      $(".moused-search").show();
      $(".unmoused-search").hide();
      $(this).hide();
  });

  $(".moused-search").mouseout(function() {
    $(".unmoused-search").show();
    $(".moused-search").hide();
    $(this).hide();
  });
};

$(document).ready(mouseover_search);

header_set = function() {
  firstHeight = $("#header").height() + 'px';
  $("#header-div").css("height", firstHeight);
};

$(document).ready(header_set);
