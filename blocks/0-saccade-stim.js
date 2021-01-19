var saccade_flash = function(flash_direction, fixation_cross){
  // Setup
  flash = "<svg width='160' height='160'>" + 
    "<rect width='160' height='160' style='fill: rgb(255,255,0); stroke-width: 3; stroke:rgb(255,255,255);' />" +
    "</svg>";
  center = "style='display: flex; justify-content: center; align-items: center;'";
  
  // Determine flash side
  if(flash_direction == "r"){
    flash_html = "<div style='justify-content: center; display: grid; grid-template: 160px / 160px 160px 160px; grid-gap: 10px;'>" +
      "<div " + center + ">" + flash + "</div>" +
      "<div " + center + ">" + fixation_cross + "</div>" +
      "<div " + center + "></div>" +
      "</div>";
  } else if(flash_direction == "l"){
    flash_html = "<div style='justify-content: center; display: grid; grid-template: 160px / 160px 160px 160px; grid-gap: 10px;'>" +
      "<div " + center + "></div>" +
      "<div " + center + ">" + fixation_cross + "</div>" +
      "<div " + center + ">" + flash + "</div>" +
      "</div>";
  }
  
  return(flash_html);
};
  
var saccade_arrow = function(direction, type, flash_direction, fixation_cross){
  // Setup
  center = "style='display: flex; justify-content: center; align-items: center;'";
  
  // Determine arrow direction
  if(direction == "l"){
    arrow = "<p style='font-size: 48px;'>&larr;</p>";
  }
  if(direction == "r"){
    arrow = "<p style='font-size: 48px;'>&rarr;</p>";
  }
  if(direction == "u"){
    arrow = "<p style='font-size: 48px;'>&uarr;</p>";
  }
  if(direction == "d"){
    arrow = "<p style='font-size: 48px;'>&darr;</p>";
  }
  
  // Determine arrow side
  if(type == "p" & flash_direction == "r"){
    arrow_html = "<div style='justify-content: center; display: grid; grid-template: 160px / 160px 160px 160px; grid-gap: 10px;'>" +
      "<div " + center + ">" + arrow + "</div>" +
      "<div " + center + ">" + fixation_cross + "</div>" +
      "<div " + center + "></div>" +
      "</div>";
  }
  
  if(type == "p" & flash_direction == "l"){
    arrow_html = "<div style='justify-content: center; display: grid; grid-template: 160px / 160px 160px 160px; grid-gap: 10px;'>" +
      "<div " + center + "></div>" +
      "<div " + center + ">" + fixation_cross + "</div>" +
      "<div " + center + ">" + arrow + "</div>" +
      "</div>";
  }
  
  if(type == "a" & flash_direction == "r"){
    arrow_html = "<div style='justify-content: center; display: grid; grid-template: 160px / 160px 160px 160px; grid-gap: 10px;'>" +
      "<div " + center + "></div>" +
      "<div " + center + ">" + fixation_cross + "</div>" +
      "<div " + center + ">" + arrow + "</div>" +
      "</div>";
  }
  
  if(type == "a" & flash_direction == "l"){
        arrow_html = "<div style='justify-content: center; display: grid; grid-template: 160px / 160px 160px 160px; grid-gap: 10px;'>" +
      "<div " + center + ">" + arrow + "</div>" +
      "<div " + center + ">" + fixation_cross + "</div>" +
      "<div " + center + "></div>" +
      "</div>";
  }
  
  return(arrow_html);
};