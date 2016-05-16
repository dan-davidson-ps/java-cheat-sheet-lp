$(document).ready(function () {
  $(".accordion-head").click(function () {
    if ($(".accordion-body").is(':visible')) {
      $(".accordion-body").slideUp(300);
      $(".plus-minus").html('<i class="fa fa-plus"></i>');
    }
    if ($(this).next(".accordion-body").is(':visible')) {
      $(this).next(".accordion-body").slideUp(300);
      $(this).children(".plus-minus").html('<i class="fa fa-plus"></i>');
    } else {
      $(this).next(".accordion-body").slideDown(300);
      $(this).children(".plus-minus").html('<i class="fa fa-minus"></i>');
    }
  });
});