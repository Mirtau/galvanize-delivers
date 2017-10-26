$(document).ready(function() {
  $('.card-action').click(function(event) {
    event.preventDefault();
    let price = $(event.target).closest(".card").find("h4")[0].innerHTML.slice(1);
    let item = $(event.target).closest(".card").find("h3")[0].innerHTML
    $(".bought").append(item, '    ', price);
    console.log(price);
    console.log(item);
    console.log(typeof item);
  })






})
