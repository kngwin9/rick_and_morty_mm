/**
 * Created by kngwin9 on 2/23/17.
 */

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

    // Function that displays the stats
    function display_stats () {

    }

    // Function that resets the stats
    function reset_stats () {

    }
    // Function for reset button
    function reset_button () {

    }

    // Show card when clicked function
    function card_clicked () {
        if ( first_card_clicked === null ) {
            first_card_clicked; // Assign to DOM Element
        }
        else {
            second_card_click; // Assign to DOM Element
            if ( first_card_clicked === second_card_click ) {
                // Add increment match counter
                if ( match_counter === total_possible_matches ) {
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