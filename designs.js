/**
* @description makes the grid on click of submit button and removes the background image
* @param {evt} used to determine the flow of the code
* @.preventDefault() - Cancels the default action of the form submission
* @.remove() - removes all table rows and table data
*/
// When size is submitted by the user, call makeGrid()
$("input[type='submit']").click(function(evt){
    evt.preventDefault();
    $('.row').remove();
    $('#grid').children('img').remove();
    makeGrid();
});
/** 
* @description makes the grid based on the value submitted by the user
* @.append() - inserts rows to last child of the specified element
*/
function makeGrid() {
    // Select size input
    let height = $('#inputHeight').val();
    let width = $('#inputWeight').val();
    // Your code goes here!
    //using if else so user does not enter too large number and crash tab
    if (height <= 200 && width <= 200) {
        for (var i = 0; i < height; i++){
            $('#pixelCanvas').append("<tr class='row'></tr>");
        }
        for (var j = 0; j < width; j++){
            $('.row').append("<td class='cell'></td>");
        }
    }
    else {
        window.alert("size too large!! Enter height and width less than 200");
    }
}
/**
* @desciption - 
* @.preventDefault() - Cancels the default action
*/
$( 'table' ).on( 'click', 'td' , function() {
    var colour = $('#colorPicker').val();
    $(this).css( 'background', colour );
});

$('#pixelCanvas').on("dblclick", "td", function(){
    $(this).css("background-color", "");
});

// Brush function
$('#pixelCanvas').mousedown(function(e) {
    if (e.which === 1){
        $("td").bind("mouseover", function() {
            var colour = $('#colorPicker').val();
            $(this).css("background-color", colour);
        });
    }
});
$('#pixelCanvas').mouseup(function(e) {
    if (e.which === 1) {
        $("td").unbind("mouseover");
    }
});