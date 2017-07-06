// Exercice 1
var addText = $('#addText');
addText.html('Hello world');

//Exercice 2
$('#remove').remove();

//Exercice 3

//method 1
$('#changeColor').css('backgroundColor','red');

//method 2
//$('#changeColor').addClass('background');

//Exercice 4

for (var i = 0; i < 4; i++) {
  $('#addChildren').append('<p>Yop</p>');
}
