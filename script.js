console.log("coucohhju");

var $grid = $('.grid').isotope({
  // options
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).data('filter');
  $grid.isotope({ filter: filterValue });
});
