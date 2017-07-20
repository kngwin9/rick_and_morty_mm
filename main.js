let first_card_clicked = null;
let second_card_clicked = null;
let first_card = null;
let second_card = null;
let first_card_back = null;
let second_card_back = null;
let total_possible_matches = 9;
let match_counter = 0;
let attempts = 0;
let accuracy = 0; // Need to fix, shows as NaN and not a number.
let games_played = 1;

$(document).ready(initialize_game);

// Initializes the game
function initialize_game() {
    initial_click_handler();
    display_stats();
    card_shuffle(cards);
    deal_cards();
}

// For click handlers
function initial_click_handler() {
    $('.card').click(card_clicked);
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
    // card_flipback();
    // Reset button only works once right now without having to refresh the page, need to fix.
}

// Function that resets the stats
function reset_stats() {
    accuracy = 0;
    match_counter = 0;
    attempts = 0;
    first_card_clicked = null;
    second_card_clicked = null;
    card_shuffle();
    display_stats();
}

// Function that flips the card back.
// function card_flipback() {
//     $('.back').removeClass('');
// }

// Flips individual unmatched cards back
// function single_card_flipback() {
//     $(first_card_back).find('.back').toggleClass('flipper');
//     $(second_card_back).find('.back').toggleClass('flipper');
// }

// Show card when clicked function
function card_clicked() {
    card_flip();
    if (first_card_clicked === null) {
        console.log("The first card was clicked.");
        first_card_clicked = this;
        // $(first_card_clicked).find('.back').addClass('flipped');
        // $('.card').toggleClass('flipped');
        first_card_back = first_card_clicked;
        first_card = $(this).find('.front').find('img').attr('src');
        attempts++;
    }
    else {
        console.log("The second card was clicked.");
        console.log("Attempts:" + attempts);
        second_card_clicked = this;
        // $('.card').toggleClass('flipped');
        second_card_back = second_card_clicked;
        // $(second_card_clicked).find('.back').addClass('flipped');
        second_card = $(this).find('.front').find('img').attr('src');

        // First and second card comparison
        if (first_card === second_card) {
            console.log("They match.");
            match_counter++;
            first_card_clicked = null;
            second_card_clicked = null;
            console.log("Match counter is at " + match_counter);
            accuracy = ((match_counter / attempts) * 100).toFixed(0);

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
            // setTimeout(single_card_flipback, 650);
            first_card_clicked = null;
            second_card_clicked = null;
        }
    }
    display_stats();
}

// Deck
const cards = [
    'images/rick_front.png',
    'images/mortysmith_front.jpg',
    'images/presidentminiverse_front.png',
    'images/birdperson3_front.png',
    'images/mrmeseeks_front.png',
    'images/gromflomite_front.png',
    'images/zeep_front.png',
    'images/snowball_front.jpg',
    'images/summersmith_front.png',
    'images/evilmorty_front.png',
    'images/tinyrick.png',
    'images/jerrysmith_front.jpg',
];
let dealt_cards = [];

// Card Shuffle
function card_shuffle() {
    let card_deck = cards.slice(0).concat(cards.slice(0));
    let remaining_deck = card_deck.length;
    let deck_index = 0;
    while(remaining_deck) {
        deck_index = Math.floor(Math.random()*remaining_deck--);
        dealt_cards.push(card_deck.splice(deck_index, 1)[0]);
        }
    return dealt_cards;
}

// Card Deal
function deal_cards() {
    $(".front img").each(function () {
        $(this).attr('src', dealt_cards.pop())
    });
}

// Card flip
function card_flip() {
    console.log("testing card flip");
    $('.card').toggleClass('flipped');
    // $(this).find('.card').toggleClass('flipped');

}