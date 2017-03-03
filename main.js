// Created by kngwin9 on 2/23/17

// v0.5 Global variables
var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;

// v1.0 Global variables
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;

$(document).ready(initialize_game);

     function initialize_game() {
         initial_click_handler();
     }

    function initial_click_handler() {
        $('.cards').click(card_clicked);
        $('#button_reset_game').click(reset_button);
     }

    // Function for reset button
    function reset_button() {
        console.log("Reset button was clicked.");
        reset_stats();
        display_stats();
    }

    // Function that displays the stats
    function display_stats() {

    }

    // Function that resets the stats
    function reset_stats() {

    }

    // Show card when clicked function
    function card_clicked() {
        var first_card = this;

        if (first_card_clicked === null) {

            console.log("The first card was clicked.");
            first_card_clicked = this;
            $(first_card_clicked).find('.back').addClass('flipped');

        }
        else {
            console.log("The second card was clicked.");
            second_card_clicked = this;
            $(second_card_clicked).find('.back').addClass('flipped');

            var second_card = this;

            if (first_card === second_card) {
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



