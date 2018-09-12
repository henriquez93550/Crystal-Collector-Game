var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var startGame = function () {
    //clears the crystals so they wont duplicate
    $(".crystals").empty();

//generates then writes the random result to HTML so it can show on the screen
randomResult = Math.floor(Math.random() * 69 ) + 30;
$("#result").html('Random Result: ' + randomResult);

//for loop "< 4" shows the amount of crystals 
for( var i = 0; i < 4; i++) {
  
    //generates random value for crystals.
    //crystals need random number value
    var randomNum = Math.floor(Math.random() * 11) + 1;
   
    //console.log(randomNum);

    
    
    var crystal = $("<div>");
    
    //seting the value of the crystal
        crystal.attr({
            "class": 'crystal',
            "data-random": randomNum
        });
        //Lets user see number values on crystal 
        crystal.html(randomNum);

    $(".crystals").append(crystal);
  }
}

startGame();

var reset = function () {

}
//Event Delegation
//allows player to click on crystal
$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

    //previous needs to be a number or else it is undefine. That is why var = 0 on the top
    previous += num;

    console.log(previous);
    
    if(previous > randomResult) {
        lost--;
        $("#lost").html(lost);
        //reset counter to zero when person loses
        previous = 0;

        startGame();
    } 
    else if(previous === randomResult) {
        win++;
        $("#win").html(win);
        //resets counter to zero when user wins
        previous = 0;

        startGame();
    }

});