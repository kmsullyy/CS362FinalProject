var playerCheck = 17.5;
var obsCheck = 17.5;
var speed = 2.5;
var up = true;
var down = true;
var left = true;
var right = true;
var lvl1 = true;
var lvl2 = false;
var lvl3 = false;
var lvl4 = false;
var lvl5 = false;

///--OBJECTS--\\

//-PLAYER-\\
var player1 = {
  x: 50,
  y: 300,

  show: function() {
    fill("red");
    stroke("#b70000");
    shape = rect(player1.x, player1.y, 25, 25);
  },

  borderCheck: function(x, y) {
    if (player1.x <= 0 + x + playerCheck) {
      left = false;
    } else {
      left = true;
    }

    if (player1.x >= width - x - playerCheck) {
      right = false;
    } else {
      right = true;
    }

    if (player1.y <= 0 + y + playerCheck) {
      up = false;
    } else {
      up = true;
    }

    if (player1.y >= height - y - playerCheck) {
      down = false;
    } else {
      down = true;
    }
  },
};

//-OBSTACLE-\\
var obs = {
  x: 100,
  y: 100,

  spdY: [6, -6, 6, -6, 6, -6, 6, -6],
  spdX: [6, -6, 6, -6, 6, -6, 6, -6],
  xcors: [150, 200, 250, 300, 350, 400, 450],
  ycors: [300, 300, 300, 300, 300, 300, 300],
  xcors2: [300, 300, 300, 300, 300, 300, 300],
  ycors2: [150, 200, 250, 300, 350, 400, 450],
  xcors3: [150, 450, 250, 350, 350, 250, 450, 150],
  ycors3: [450, 150, 350, 250, 250, 350, 150, 450],

  show: function() {
    ellipseMode(CENTER);
    fill("blue");
    stroke("black");

    if (lvl1 == true) {
      for (let i = 0; i < 7; i++) {
        ellipse(obs.xcors[i], obs.ycors[i], 25, 25);
        obs.ycors[i] += obs.spdY[i];
      }
    }

    if (lvl2 == true) {
      for (let i = 0; i < 7; i++) {
        ellipse(obs.xcors2[i], obs.ycors2[i], 25, 25);
        obs.xcors2[i] += obs.spdX[i];
      }
    }

    if (lvl3 == true) {
      for (let i = 0; i < 8; i++) {
        ellipse(obs.xcors3[i], obs.ycors3[i], 25, 25);
        if (i % 2 == 0) {
          obs.xcors3[i] += obs.spdX[i];
        } else {
          obs.ycors3[i] += obs.spdY[i];
        }
      }
    }
  },

  borderCheck: function(x, y) {
    for (let i = 0; i < 8; i++) {
      if (lvl1 == true) {
        if (
          obs.xcors[i] <= x + obsCheck ||
          obs.xcors[i] >= width - x - obsCheck ||
          obs.ycors[i] <= y + obsCheck ||
          obs.ycors[i] >= height - y - obsCheck
        ) {
          obs.spdY[i] = -obs.spdY[i];
        }
      }
      if (lvl2 == true) {
        if (
          obs.xcors2[i] <= x + obsCheck ||
          obs.xcors2[i] >= width - x - obsCheck ||
          obs.ycors2[i] <= y + obsCheck ||
          obs.ycors2[i] >= height - y - obsCheck
        )
          obs.spdX[i] = -obs.spdX[i];
      }
      if (lvl3 == true) {
        if (
          obs.xcors3[i] <= x + obsCheck ||
          obs.xcors3[i] >= width - x - obsCheck ||
          obs.ycors3[i] <= y + obsCheck ||
          obs.ycors3[i] >= height - y - obsCheck
        )
          if (i % 2 == 0) {
            obs.spdX[i] = -obs.spdX[i];
          } else {
            obs.spdY[i] = -obs.spdY[i];
          }
      }
    }
  },
};

///--MAIN FUNCITONS--\\\

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  //-LVLS-\\
  if (lvl1 == true) {
    //-BG-\\
    background(255);

    //-FUNCTIONS-\\
    zonesLVL1();
    player1.show();
    player1.borderCheck(0, 100);
    obs.show();
    obs.borderCheck(0, 100);
    collisionCheck();
    lvlCheck(500, 0);
  }

  if (lvl2 == true) {
    //-BG-\\
    background(255);

    //-FUNCTIONS-\\
    zonesLVL2();
    player1.show();
    player1.borderCheck(100, 0);
    obs.show();
    obs.borderCheck(100, 0);
    collisionCheck();
    lvlCheck(0, 100);
  }

  if (lvl3 == true) {
    //-BG-\\
    background(255);

    //-FUNCTIONS-\\
    zonesLVL3();
    player1.show();
    player1.borderCheck(0, 100);
    obs.show();
    obs.borderCheck(100, 100);
    collisionCheck();
    lvlCheck(500, 0);
  }

  if (lvl4 == true) {
    //-BG-\\
    background(255);

    //-FUNCTIONS-\\
    zonesLVL4();
    player1.show();
    player1.borderCheck(100, 100);
    obs.show();
    obs.borderCheck(100, 100);
    collisionCheck();
    lvlCheck(0, 100);
  }

  if (lvl5 == true) {
    //-BG-\\
    background(255);

    //-FUNCTIONS-\\
    zonesLVL5();
    player1.show();
    player1.borderCheck(0, 100);
    obs.show();
    obs.borderCheck(100, 100);
    collisionCheck();
  }

  //-KEYBINDINGS-\\

  if (keyIsDown(UP_ARROW) && up == true) {
    player1.y += -speed;
  }

  if (keyIsDown(DOWN_ARROW) && down == true) {
    player1.y += speed;
  }

  if (keyIsDown(RIGHT_ARROW) && right == true) {
    player1.x += speed;
  }

  if (keyIsDown(LEFT_ARROW) && left == true) {
    player1.x += -speed;
  }
}

function zonesLVL1() {
  fill("lightgreen");
  noStroke();
  rect(0, 300, 200, 400);
  rect(600, 300, 200, 400);
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(300, 300, 600, 400);
}

function zonesLVL2() {
  fill("lightgreen");
  noStroke();
  rect(300, 0, 400, 200);
  rect(300, 600, 400, 200);
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(300, 300, 400, 600);
}

function zonesLVL3() {
  fill("lightgreen");
  noStroke();
  rect(0, 300, 200, 400);
  rect(600, 300, 200, 400);
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(300, 300, 600, 400);
}

function zonesLVL4() {
  fill("lightgreen");
  noStroke();
  rect(0, 300, 200, 400);
  rect(600, 300, 200, 400);
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(300, 300, 600, 400);
}

function zonesLVL5() {
  fill("lightgreen");
  noStroke();
  rect(100, 300, 200, 400); 
  rect(500, 300, 200, 400); 
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(300, 300, 600, 400); 
}

function lvlCheck(x, y) {
  // Transition to Level 2
  if (x > 0) {
    if (player1.x >= x) {
      lvl1 = false;
      lvl2 = true;
      player1.x = 325;
      player1.y = 550; 
    }
  }

  // Transition to Level 3
  if (y > 0) {
    if (player1.y <= y) {
      lvl2 = false;
      lvl3 = true;
      player1.x = 50;
      player1.y = 300; 
    }
  }

  // Transition to Level 4
  if (lvl3) {
    if (player1.x >= 500) {
      lvl3 = false;
      lvl4 = true;
      player1.x = 50; 
      player1.y = 300;
    }
  }

  // Transition to Level 5
  if (lvl4) {
    if (player1.y <= 100) {
      lvl4 = false;
      lvl5 = true;
      player1.x = 50; 
      player1.y = 300;
    }
  }
}

function collisionCheck() {
  if (lvl1 == true) {
    for (let i = 0; i < 8; i++) {
      let d = dist(player1.x, player1.y, obs.xcors[i], obs.ycors[i]);
      if (d <= 30) {
        player1.x = 50;
        player1.y = 300;
      }
    }
  }

  if (lvl2 == true) {
    for (let i = 0; i < 8; i++) {
      let d = dist(player1.x, player1.y, obs.xcors2[i], obs.ycors2[i]);
      if (d <= 30) {
        player1.x = 325;
        player1.y = 550; 
      }
    }
  }

  if (lvl3 == true) {
    for (let i = 0; i < 8; i++) {
      let d = dist(player1.x, player1.y, obs.xcors3[i], obs.ycors3[i]);
      if (d <= 30) {
        player1.x = 50;
        player1.y = 300; 
      }
    }
  }

  if (lvl4 == true) {
    for (let i = 0; i < 8; i++) {
      let d = dist(player1.x, player1.y, obs.xcors3[i], obs.ycors3[i]);
      if (d <= 30) {
        player1.x = 50; 
        player1.y = 300;
      }
    }
  }

  if (lvl5 == true) {
    for (let i = 0; i < 8; i++) {
      let d = dist(player1.x, player1.y, obs.xcors3[i], obs.ycors3[i]);
      if (d <= 30) {
        player1.x = 50; 
        player1.y = 300;
      }
    }
  }
}