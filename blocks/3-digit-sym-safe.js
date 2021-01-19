//-------------------------- Digit-Symbol, Safe

timeline.push({
  timeline: [
      // Start
      {
        type: 'html-keyboard-response',
        stimulus: cross,
        choices: jsPsych.NO_KEYS,
        trial_duration: jsPsych.timelineVariable('interval'),
        prompt: screen_safe
      },
      //
      {
        type: 'html-button-response',
        stimulus: jsPsych.timelineVariable('stim'),
        choices: dig_sym_choices,
        prompt: screen_safe
      }
  ],
  randomize_order: true,
  timeline_variables: [
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 3500, stim: sym_stim[0]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 2250, stim: sym_stim[1]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 3000, stim: sym_stim[2]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 1500, stim: sym_stim[3]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 1750, stim: sym_stim[4]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 3000, stim: sym_stim[5]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 1750, stim: sym_stim[6]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 2000, stim: sym_stim[7]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 1500, stim: sym_stim[8]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 3500, stim: sym_stim[0]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 2250, stim: sym_stim[1]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 3000, stim: sym_stim[2]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 1500, stim: sym_stim[3]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 1750, stim: sym_stim[4]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 3000, stim: sym_stim[5]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 1750, stim: sym_stim[6]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 2000, stim: sym_stim[7]},
    {data: {task: 'digit_sym', threat: 'safe'}, interval: 1500, stim: sym_stim[8]}
  ]
});
