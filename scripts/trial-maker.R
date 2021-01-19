# Setup -------------------------------------------------------------------
# Libraries
library(tidyverse)
library(glue)

# Set seed
set.seed(1)

# Make inter-trial intervals
ms <- seq(1500, 3500, 250)

# Unpredictable Threat ----------------------------------------------------
expand_grid(type = c("p","a"), direction = c("u","l","r","d"), flash_side = c("l","r")) %>% 
  as_tibble() %>% 
  mutate(
    opposite_side = case_when(flash_side == "l" ~ "r", flash_side == "r" ~ "l"),
    arrow_side    = case_when(type == "p" ~ flash_side, type == "a" ~ opposite_side),
    audio         = ifelse(row_number() <=2, "audio_files[0]", "audio_files[1]"),
    image         = ifelse(audio == "audio_files[0]", "screen_unp + fear_img1", "''"),
    duration      = ifelse(audio == "audio_files[1]", 0, "null"),
    end           = ifelse(audio == "audio_files[1]", "false", "true"),
    ms            = sample(ms, n(), replace = T),
    answer        = case_when(direction == "l" ~ 37, direction == "u" ~ 38, direction == "r" ~ 39, direction == "d" ~ 40)
  ) %>% 
  glue_data(
    .open = "[", .close = "]",
    "{data: {task: 'sacc', threat: 'unp', answer: [answer], answer_chr: '[direction]', type: '[type]', f_side: '[flash_side]', a_side: '[arrow_side]'}, interval: [ms], flash: saccade_flash('[flash_side]',cross), arrow: saccade_arrow('[direction]','[type]','[flash_side]',cross), audio: [audio], image: [image], duration: [duration], end_after_audio: [end]},"
  ) %>% 
  clipr::write_clip()

# Predictable Threat ----------------------------------------------------
expand_grid(type = c("p","a"), direction = c("u","l","r","d"), flash_side = c("l","r")) %>% 
  as_tibble() %>% 
  mutate(
    opposite_side = case_when(flash_side == "l" ~ "r", flash_side == "r" ~ "l"),
    arrow_side    = case_when(type == "p" ~ flash_side, type == "a" ~ opposite_side),
    audio         = ifelse(row_number() <=2, "audio_files[0]", "audio_files[1]"),
    image         = ifelse(audio == "audio_files[0]", "screen_pre + fear_img1", "''"),
    duration      = ifelse(audio == "audio_files[1]", 0, "null"),
    end           = ifelse(audio == "audio_files[1]", "false", "true"),
    warn          = ifelse(audio == "audio_files[0]","warning","''"),
    frame_time    = ifelse(audio == "audio_files[0]",1000, 0),
    ms            = sample(ms, n(), replace = T),
    answer        = case_when(direction == "l" ~ 37, direction == "u" ~ 38, direction == "r" ~ 39, direction == "d" ~ 40)
  ) %>% 
  glue_data(
    .open = "[", .close = "]",
    "{data: {task: 'sacc', threat: 'pre', answer: [answer], answer_chr: '[direction]', type: '[type]', f_side: '[flash_side]', a_side: '[arrow_side]'}, ",
    "interval: [ms], flash: saccade_flash('[flash_side]',cross), arrow: saccade_arrow('[direction]','[type]','[flash_side]',cross), ",
    "audio: [audio], image: [image], duration: [duration], end_after_audio: [end], ",
    "frame_time: [frame_time], warn: [warn]},"
  ) %>% 
  clipr::write_clip()
