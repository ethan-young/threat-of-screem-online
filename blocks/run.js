//-------------------------- End page
timeline.push({
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished with this task.<br><br>" +
  "Click 'continue' to proceed.<br><br>",
  choices: ['continue'],
  data: {variable: "end"},
});

//-------------------------- Initialize Experiment
jsPsych.init({
  timeline: timeline,
  preload_audio: audio_files,
  on_finish: function() {
    jsPsych.data.displayData();
    data = jsPsych.data.get().json();
    scream_data = jsPsych.data.get().json();
    window.parent.postMessage(scream_data, '');
  }
});
