var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var startGame = function () {
    //clears the crystals so they wont duplicate
    $(".crystals").empty();

    var images = [
        'https://vignette.wikia.nocookie.net/powerlisting/images/d/d3/2013-10-Blue-Crystal-Abstract.jpg/revision/latest?cb=20160227092023',
        'http://www.scienceclarified.com/photos/crystal-3107.jpg',
        'https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719',
        'https://www.djurmaxi.se/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/2/927906.jpg'];

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
    //adds crytal image to the crystal div so the user can see it    
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            //cover makes the picture to fit inside the div
            "background-size":"cover"

        });

        //Lets user see number values on crystal 
        //crystal.html(randomNum);

    $(".crystals").append(crystal);
  }
  $("#previous").html("Total Score: " + previous);
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

    //writes results on to the HTML
    $("#previous").html("Crystals Collected: " + previous);

    console.log(previous);
    
    if(previous > randomResult) {
        lost++;
        $("#lost").html("You Lost : " + lost);
        //reset counter to zero when person loses
        previous = 0;

        startGame();
    } 
    else if(previous === randomResult) {
        win++;
        $("#win").html("Your Wins: " + win);
       
       

        
        //resets counter to zero when user wins
        previous = 0;

        startGame();
    }

});