$(document).ready(function() {
  $('#frontpage').fadeIn(2000);
  $('#aboutcontent').fadeIn(2000);
  console.log('hi');
  $('.frontpageimages').on('focus mouseover', function() {
    $(this).prev().css('display', 'block');
  });
  $('.frontpageimages').on('blur mouseleave', function() {
    $(this).prev().css('display', 'none');
  });
});
