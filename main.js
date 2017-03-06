var first_card_clicked = null;
var second_card_clicked = null;
var first_card = null;
var second_card = null;
var first_card_back = null;
var second_card_back = null;
var total_possible_matches = 9;
var match_counter = 0;
var attempts = 0;
var accuracy = (match_counter / attempts); // Need to fix, shows as NaN and not a number.
var games_played = 1;

$(document).ready(initialize_game);

// Initializes the game
function initialize_game() {
    initial_click_handler();
    display_stats();
}

// For click handlers
function initial_click_handler() {
    $('.cards').click(card_clicked);
    $('#button_reset_game').click(reset_button);
}

// Displays the stats
function display_stats() {
    console.log('Stats have been displayed.');
    $('#times_played').text(games_played);
    $('#attempts_p').text(attempts);
    $('#accuracy_p').text(accuracy + "%");
}

// For reset button
function reset_button() {
    console.log("Reset button was clicked.");
    games_played++;
    reset_stats();
    card_flipback();
    // Reset button only works once right now without having to refresh the page, need to fix.
}

// Function that resets the stats
function reset_stats() {
    accuracy = 0;
    match_counter = 0;
    attempts = 0;
    first_card_clicked = null;
    second_card_clicked = null;
    randomize_cards();
    display_stats();
}

// Function that flips the card back.
function card_flipback() {
    $('.back').removeClass('flipped');
}

// Show card when clicked function
function card_clicked() {
    if (first_card_clicked === null) {
        console.log("The first card was clicked.");
        first_card_clicked = this;
        $(first_card_clicked).find('.back').addClass('flipped');
        first_card_back = first_card_clicked;
        first_card = $(this).find('.front').find('img').attr('src');
        attempts++;
    }

    else {
        console.log("The second card was clicked.");
        console.log("Attempts:" + attempts);
        second_card_clicked = this;
        second_card_back = second_card_clicked;
        $(second_card_clicked).find('.back').addClass('flipped');
        second_card = $(this).find('.front').find('img').attr('src');

        // First and second card comparison
        if (first_card === second_card) {
            console.log("They match.");
            match_counter++;
            first_card_clicked = null;
            second_card_clicked = null;
            console.log("Match counter is at " + match_counter);

            // Match counter to win
            if (match_counter === total_possible_matches) {
                window.alert("You Win!")
            }
            else {
                return "Keep Going."
            }
        }

        // If cards do not match
        else {
            console.log("They did not match.");
           // setTimeout(card_flipback, 800); // (first_card_clicked, second_card_clicked)
            $(first_card_back).find('.back').removeClass('flipped');
            $(second_card_back).find('.back').removeClass('flipped');
            first_card_clicked = null;
            second_card_clicked = null;
        }
    }
    display_stats();
}

// Wanted to add a randomize/shuffles the cards
function randomize_cards() {

}