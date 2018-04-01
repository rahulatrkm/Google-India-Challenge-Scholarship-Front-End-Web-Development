/**
* @description makes the grid on click of submit button
* @param {evt} used to determine the flow of the code
*/
// When size is submitted by the user, call makeGrid()
$("input[type='submit']").click(function(evt){
    evt.preventDefault();
    $('.row').remove();
    makeGrid();
});
/**
* @description makes the grid based on the value submitted by the user
*/
function makeGrid() {
    // Select size input
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    // Your code goes here!
    for (var i = 0; i < height; i++){
        $('#pixelCanvas').append("<tr class='row'></tr>");
    }
    for (var j = 0; j < width; j++){
        $('.row').append("<td class='cell'></td>");
    }
}
$( 'table' ).on( 'click', function( evt ) {
    evt.preventDefault();
    // Select color input
    var colour = $('#colorPicker').val();
    $(evt.target).css( 'background', colour );
});