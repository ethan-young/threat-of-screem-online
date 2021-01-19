//-------------------------- Anti-saccade, Safe

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
      // Flash
      {
        type: 'html-keyboard-response',
        stimulus: jsPsych.timelineVariable("flash"),
        choices: jsPsych.NO_KEYS,
        trial_duration: 150,
        prompt: screen_safe
      },
      // Arrow
      {
        type: 'html-keyboard-response',
        stimulus: jsPsych.timelineVariable("arrow"),
        choices: jsPsych.NO_KEYS,
        trial_duration: 175,
        prompt: screen_safe
      },
      // Response
      {
        type: 'html-keyboard-response',
        stimulus: '',
        choices: my_keys,
        data: jsPsych.timelineVariable('data'),
        prompt: screen_safe + "What direction was the arrow pointing?"
      }
  ],
  randomize_order: true,
  timeline_variables: [
    {data: {task: 'sacc', threat: 'safe', answer: 38, answer_chr: 'u', type: 'p', f_side: 'l', a_side: 'l'}, interval: 3500, flash: saccade_flash('l',cross), arrow: saccade_arrow('u','p','l',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 38, answer_chr: 'u', type: 'p', f_side: 'r', a_side: 'r'}, interval: 2250, flash: saccade_flash('r',cross), arrow: saccade_arrow('u','p','r',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 37, answer_chr: 'l', type: 'p', f_side: 'l', a_side: 'l'}, interval: 3000, flash: saccade_flash('l',cross), arrow: saccade_arrow('l','p','l',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 37, answer_chr: 'l', type: 'p', f_side: 'r', a_side: 'r'}, interval: 1500, flash: saccade_flash('r',cross), arrow: saccade_arrow('l','p','r',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 39, answer_chr: 'r', type: 'p', f_side: 'l', a_side: 'l'}, interval: 1750, flash: saccade_flash('l',cross), arrow: saccade_arrow('r','p','l',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 39, answer_chr: 'r', type: 'p', f_side: 'r', a_side: 'r'}, interval: 3000, flash: saccade_flash('r',cross), arrow: saccade_arrow('r','p','r',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 40, answer_chr: 'd', type: 'p', f_side: 'l', a_side: 'l'}, interval: 1750, flash: saccade_flash('l',cross), arrow: saccade_arrow('d','p','l',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 40, answer_chr: 'd', type: 'p', f_side: 'r', a_side: 'r'}, interval: 2000, flash: saccade_flash('r',cross), arrow: saccade_arrow('d','p','r',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 38, answer_chr: 'u', type: 'a', f_side: 'l', a_side: 'r'}, interval: 1500, flash: saccade_flash('l',cross), arrow: saccade_arrow('u','a','l',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 38, answer_chr: 'u', type: 'a', f_side: 'r', a_side: 'l'}, interval: 2500, flash: saccade_flash('r',cross), arrow: saccade_arrow('u','a','r',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 37, answer_chr: 'l', type: 'a', f_side: 'l', a_side: 'r'}, interval: 2500, flash: saccade_flash('l',cross), arrow: saccade_arrow('l','a','l',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 37, answer_chr: 'l', type: 'a', f_side: 'r', a_side: 'l'}, interval: 2750, flash: saccade_flash('r',cross), arrow: saccade_arrow('l','a','r',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 39, answer_chr: 'r', type: 'a', f_side: 'l', a_side: 'r'}, interval: 3000, flash: saccade_flash('l',cross), arrow: saccade_arrow('r','a','l',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 39, answer_chr: 'r', type: 'a', f_side: 'r', a_side: 'l'}, interval: 3500, flash: saccade_flash('r',cross), arrow: saccade_arrow('r','a','r',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 40, answer_chr: 'd', type: 'a', f_side: 'l', a_side: 'r'}, interval: 2500, flash: saccade_flash('l',cross), arrow: saccade_arrow('d','a','l',cross)},
    {data: {task: 'sacc', threat: 'safe', answer: 40, answer_chr: 'd', type: 'a', f_side: 'r', a_side: 'l'}, interval: 2500, flash: saccade_flash('r',cross), arrow: saccade_arrow('d','a','r',cross)}
  ]
});