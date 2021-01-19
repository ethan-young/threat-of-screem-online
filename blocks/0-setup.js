// Audio
var audio_files = ["audio/46_fear.wav","audio/blank.mp3"];

// Images
var fear_img1 = "<img src='img/Animals_004_v.jpg' width='50%'>"; // Fear images
var c_down = ["img/Slide3.png","img/Slide2.png","img/Slide1.png"]; // count down for predictable threat

// Screen Cues for threat conditions
var screen_pre  = "<style>.jspsych-content-wrapper{border: 20px solid blue; margin: auto; width: 95%; height: 95%;}</style>";
var screen_unp  = "<style>.jspsych-content-wrapper{border: 20px solid orange; margin: auto; width: 95%; height: 95%;}</style>";
var screen_safe = "<style>.jspsych-content-wrapper{border: 20px solid lightblue; margin: auto; width: 95%; height: 95%;}</style>";
var warning = screen_pre + "<br><p>A scream is coming!</p>";

// Saccade Task Variables
var cross = "<p style='font-size: 32px;'>+</p>";
var my_keys = [37,38,39,40]; // l, u, r, d

// Processing Speed Variables
var digits  = [1,2,3,4,5,6,7,8,9];
var letters = ["N","X","T","U","Z","H","D","L","W"];
var symbols = ["&#8597;","&harr;","&perp;","&equiv;","&ne;","&#9744;","&empty;","&isin;","&ni;"];

// Symbol choices
var dig_sym_choices = [];
var i;
for (i = 0; i< digits.length; i++) {
  dig_sym_choices[i] = "<div style = 'padding: 5px; text-align: center; font-size: 32px; font-weight: bold;'>" +
                       digits[i] +
                       "</div>" +
                       "<div style = 'padding: 5px; text-align: center; font-size: 32px; font-weight: bold;'>" +
                       symbols[i] +
                       "</div>";
}

// Symbol Targets
var sym_stim = [];
for (i = 0; i< digits.length; i++) {
  sym_stim[i] = "<div style = 'padding: 5px; text-align: center; font-size: 48px; font-weight: bold; width: 100px; height: 100px; margin: auto;'>" +
                "<p>" + symbols[i] + "</p>" +
                "</div><br><br>";
}

// Letter choices
var dig_let_choices = [];
for (i = 0; i< digits.length; i++) {
  dig_let_choices[i] = "<div style = 'padding: 5px; text-align: center; font-size: 32px; font-weight: bold;'>" +
                       digits[i] +
                       "</div>" +
                       "<div style = 'padding: 5px; text-align: center; font-size: 32px; font-weight: bold;'>" +
                       letters[i] +
                       "</div>";
}

// Letter Targets
var let_stim = [];
for (i = 0; i< digits.length; i++) {
  let_stim[i] = "<div style = 'padding: 5px; text-align: center; font-size: 48px; font-weight: bold; width: 100px; height: 100px; margin: auto;'>" +
                "<p>" + letters[i] + "</p>" +
                "</div><br><br>";
}