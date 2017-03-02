// Created by kngwin9 on 2/23/17

// v0.5 Global variables
var first_card_clicked = null;
var second_card_click = null;
var total_possible_matches = 2;
var match_counter = 0;

// v1.0 Global variables
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;

$(document).ready(function(){

    $(".back").click(function(){
        card_clicked();
        card_flipped(this);
    });

    /*  function initialGame() {

     }

     function initialClickHandler() {
     $(".back").click(handleClick);
     }

     */

    function card_flipped(card1, card2) {
        $(card1).addClass('flipped');
        $(card2).addClass('flipped');
        console.log("Card flipped.");
    }


    // Function that displays the stats
    function display_stats() {

    }

    // Function that resets the stats
    function reset_stats() {

    }

    // Function for reset button
    function reset_button() {

    }


    // Show card when clicked function
    function card_clicked(card1, card2) {
       // card_flipped(card1);

        if (first_card_clicked === null) {
            console.log("The first card was clicked.");
            first_card_clicked = card1;
        }
        else {
            console.log("The second card was clicked.");
            second_card_click = card2;
            if (first_card_clicked === second_card_click) {
                console.log("They match!");

                // Add increment match counter
                if (match_counter === total_possible_matches) {
                    // Add display message to user
                }
                else {
                    // Add click functionality is complete, return.
                }

            }
            else {
                // Add waiting to 2 seconds part.
            }

        }

    }

});


