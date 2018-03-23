$(document).ready(function() {
  $('.frontpageimages').on('focus mouseover', function() {
    $(this).prev().css('display', 'block');
  });
  $('.frontpageimages').on('blur mouseleave', function() {
    $(this).prev().css('display', 'none');
  });
});
