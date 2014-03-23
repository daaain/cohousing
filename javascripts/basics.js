$(document).ready(function() {
  // pretty format dates
  $.each($("[data-time]"), function(index, ele) {
    $(ele).html(prettyDate(new Date($(this).data("time"))));
  });

  // enable fancybox on images with "fancybox" class
  $('.fancybox').fancybox();
});