var wins = 0
var looses = 0
var computer = 0
var total = 0
var crystals = []

console.log($("#wins").parent().parent().attr("class"))

function play() {
    // create random number for the computer
    computer = Math.floor(Math.random() * 100) + 20
        // random nnumber for the crystals
    for (var i = 0; i < 4; i++) {
        crystals[i] = Math.floor(Math.random() * 12) + 1
    }
    console.log("crystals", crystals)

    // clear the total 
    total = 0
        // show the info in the DOM to the user
    $("#wins").text(wins)
    $("#looses").text(looses)
    $("#computer").text(computer)
    $("#total").text(total)

}

$(".crystals").on("click", function() {

    console.log(this)

    // get the value from the crystal  
    var elem = $(this).attr("index")
    console.log("index:", elem)


    // increment the total

    total = total + crystals[elem]
    $("#total").text(total)

    // compare total with computer
    if (total === computer) {
        alert("you win, play again")
        wins++
        play()

    } else if (total > computer) {
        alert("you loose, play again")
        looses++
        play()
    }


})


play()