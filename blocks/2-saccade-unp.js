//-------------------------- Anti-saccade, Unpredictable Threat

timeline.push({
  timeline: [
      // Start
      {
        type: 'html-keyboard-response',
        stimulus: cross,
        choices: jsPsych.NO_KEYS,
        trial_duration: jsPsych.timelineVariable('interval'),
        prompt: screen_unp
      },
      // Flash
      {
        type: 'html-keyboard-response',
        stimulus: jsPsych.timelineVariable("flash"),
        choices: jsPsych.NO_KEYS,
        trial_duration: 150,
        prompt: screen_unp
      },
      // Arrow
      {
        type: 'html-keyboard-response',
        stimulus: jsPsych.timelineVariable("arrow"),
        choices: jsPsych.NO_KEYS,
        trial_duration: 175,
        prompt: screen_unp
      },
      // Response
      {
        type: 'html-keyboard-response',
        stimulus: '',
        choices: my_keys,
        data: jsPsych.timelineVariable('data'),
        prompt: screen_unp + "What direction was the arrow pointing?"
      },
      // Audio
      {
        type: 'audio-keyboard-response',
        stimulus: jsPsych.timelineVariable('audio'),
        choices: jsPsych.NO_KEYS,
        trial_ends_after_audio:jsPsych.timelineVariable('end_after_audio'),
        trial_duration: jsPsych.timelineVariable('duration'),
        prompt: jsPsych.timelineVariable('image')
      }
  ],
  randomize_order: false,
  timeline_variables: [
{data: {task: 'sacc', threat: 'unp', answer: 38, answer_chr: 'u', type: 'p', f_side: 'l', a_side: 'l'}, interval: 3500, flash: saccade_flash('l',cross), arrow: saccade_arrow('u','p','l',cross), audio: audio_files[0], image: screen_unp + fear_img1, duration: null, end_after_audio: true},
{data: {task: 'sacc', threat: 'unp', answer: 38, answer_chr: 'u', type: 'p', f_side: 'r', a_side: 'r'}, interval: 2250, flash: saccade_flash('r',cross), arrow: saccade_arrow('u','p','r',cross), audio: audio_files[0], image: screen_unp + fear_img1, duration: null, end_after_audio: true},
{data: {task: 'sacc', threat: 'unp', answer: 37, answer_chr: 'l', type: 'p', f_side: 'l', a_side: 'l'}, interval: 3000, flash: saccade_flash('l',cross), arrow: saccade_arrow('l','p','l',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 37, answer_chr: 'l', type: 'p', f_side: 'r', a_side: 'r'}, interval: 1500, flash: saccade_flash('r',cross), arrow: saccade_arrow('l','p','r',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 39, answer_chr: 'r', type: 'p', f_side: 'l', a_side: 'l'}, interval: 1750, flash: saccade_flash('l',cross), arrow: saccade_arrow('r','p','l',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 39, answer_chr: 'r', type: 'p', f_side: 'r', a_side: 'r'}, interval: 3000, flash: saccade_flash('r',cross), arrow: saccade_arrow('r','p','r',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 40, answer_chr: 'd', type: 'p', f_side: 'l', a_side: 'l'}, interval: 1750, flash: saccade_flash('l',cross), arrow: saccade_arrow('d','p','l',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 40, answer_chr: 'd', type: 'p', f_side: 'r', a_side: 'r'}, interval: 2000, flash: saccade_flash('r',cross), arrow: saccade_arrow('d','p','r',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 38, answer_chr: 'u', type: 'a', f_side: 'l', a_side: 'r'}, interval: 1500, flash: saccade_flash('l',cross), arrow: saccade_arrow('u','a','l',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 38, answer_chr: 'u', type: 'a', f_side: 'r', a_side: 'l'}, interval: 2500, flash: saccade_flash('r',cross), arrow: saccade_arrow('u','a','r',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 37, answer_chr: 'l', type: 'a', f_side: 'l', a_side: 'r'}, interval: 2500, flash: saccade_flash('l',cross), arrow: saccade_arrow('l','a','l',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 37, answer_chr: 'l', type: 'a', f_side: 'r', a_side: 'l'}, interval: 2750, flash: saccade_flash('r',cross), arrow: saccade_arrow('l','a','r',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 39, answer_chr: 'r', type: 'a', f_side: 'l', a_side: 'r'}, interval: 3000, flash: saccade_flash('l',cross), arrow: saccade_arrow('r','a','l',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 39, answer_chr: 'r', type: 'a', f_side: 'r', a_side: 'l'}, interval: 3500, flash: saccade_flash('r',cross), arrow: saccade_arrow('r','a','r',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 40, answer_chr: 'd', type: 'a', f_side: 'l', a_side: 'r'}, interval: 2500, flash: saccade_flash('l',cross), arrow: saccade_arrow('d','a','l',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false},
{data: {task: 'sacc', threat: 'unp', answer: 40, answer_chr: 'd', type: 'a', f_side: 'r', a_side: 'l'}, interval: 2500, flash: saccade_flash('r',cross), arrow: saccade_arrow('d','a','r',cross), audio: audio_files[1], image: screen_unp, duration: 0, end_after_audio: false}
  ]
});