$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(300, 625, 150, 20,"blue");
      createPlatform(100, 500, 40, 20,"blue");
      createPlatform(360, 400, 50, 20,"blue");
      createPlatform(645, 398, 30, 20,"blue");
      createPlatform(850, 500, 100, 20,"blue");
      createPlatform(1120, 370, 50, 20,"blue");
      createPlatform(1000, 250, 25, 20,"blue");
      createPlatform(800, 150, 50, 20,"blue");
      createPlatform(1000, 700, 40, 20,"blue");




    // TODO 3 - Create Collectables
    createCollectable("steve", 100, 475);
    createCollectable("steve", 645, 375);
    createCollectable("steve", 1000, 675);
    createCollectable("steve", 800, 125);
   



    
    // TODO 4 - Create Cannons
      createCannon("right", 800, 100);
      createCannon("bottom", 200, 850);
      createCannon("bottom", 900, 1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
