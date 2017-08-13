let first_card_clicked = null;
let second_card_clicked = null;
let first_card = null;
let second_card = null;
let first_card_back = null;
let second_card_back = null;
let total_possible_matches = 9;
let match_counter = 0;
let attempts = 0;
let accuracy = 0;
let games_played = 1;

$(document).ready(initialize_game);

// Initializes the game
function initialize_game() {
    card_shuffle(cards);
    deal_cards();
    initial_click_handler();
    display_stats();
}

// For click handlers
function initial_click_handler() {
    $('.card').click(card_clicked);
    $('#button_reset_game').click(reset_button);
}

// Displays the stats
function display_stats() {
    $('#times_played').text(games_played);
    $('#attempts_p').text(attempts);
    $('#accuracy_p').text(accuracy + "%");
}

// For reset button
function reset_button() {
    all_card_flipback();
    games_played++;
    reset_stats();
    setTimeout(card_shuffle(cards), 1000);
    setTimeout(deal_cards, 1000);
}

// Function that resets the stats
function reset_stats() {
    accuracy = 0;
    match_counter = 0;
    attempts = 0;
    first_card_clicked = null;
    second_card_clicked = null;
    display_stats();
}

// Function that flips the card front.
function card_flipback() {
    $(first_card_back).removeClass('flipped');
    $(second_card_back).removeClass('flipped');
}
function all_card_flipback() {
    $(".card").removeClass('flipped');
}

// Show card when clicked function
function card_clicked() {
    card_flip(this);
    if (first_card_clicked === null) {
        first_card_clicked = this;
        first_card_back = first_card_clicked;
        first_card = $(this).find('.back').find('img').attr('src');
        attempts++;
        disable_flip(this);

    }
    else {
        second_card_clicked = this;
        second_card_back = second_card_clicked;
        second_card = $(this).find('.back').find('img').attr('src');
        disable_flip(this);

        // First and second card comparison
        if (first_card === second_card) {
            match_counter++;
            first_card_clicked = null;
            second_card_clicked = null;
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
            allow_flip(first_card_clicked, second_card_clicked);
            setTimeout(card_flipback, 700);
            first_card_clicked = null;
            second_card_clicked = null;
        }
        display_stats();
    }
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
    $(".back img").each(function () {
        $(this).attr('src', dealt_cards.pop())
    });
}

// Card Flip
function card_flip(card) {
    $(card).toggleClass('flipped');
}

function disable_flip(card) {
    console.log("Disabled");
    $(card).off();
}

function allow_flip(card1, card2) {
    console.log("Flip On");
    $(card1).on('click', card_clicked);
    $(card2).on('click', card_clicked);
}