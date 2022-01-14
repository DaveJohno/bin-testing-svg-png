//PNG Images
const greenBin = document.getElementById(`binGreen`);
const yellowBin = document.getElementById(`binYellow`);
const redBin = document.getElementById(`binRed`);

//green Bin
greenBin.addEventListener(`mouseenter`, function () {
  greenBin.classList.add(`binGreenHover`);
});
greenBin.addEventListener(`mouseleave`, function () {
  greenBin.classList.remove(`binGreenHover`);
});
greenBin.addEventListener(`click`, function () {
  greenBin.classList.add(`binGreenActive`);
  yellowBin.classList.remove(`binYellowActive`);
  redBin.classList.remove(`binRedActive`);
});

//yellow bin
yellowBin.addEventListener(`mouseenter`, function () {
  yellowBin.classList.add(`binYellowHover`);
});
yellowBin.addEventListener(`mouseleave`, function () {
  yellowBin.classList.remove(`binYellowHover`);
});
yellowBin.addEventListener(`click`, function () {
  greenBin.classList.remove(`binGreenActive`);
  yellowBin.classList.add(`binYellowActive`);
  redBin.classList.remove(`binRedActive`);
});

//Red bin
redBin.addEventListener(`mouseenter`, function () {
  redBin.classList.add(`binRedHover`);
});
redBin.addEventListener(`mouseleave`, function () {
  redBin.classList.remove(`binRedHover`);
});
redBin.addEventListener(`click`, function () {
  greenBin.classList.remove(`binGreenActive`);
  yellowBin.classList.remove(`binYellowActive`);
  redBin.classList.add(`binRedActive`);
});
//End PNG Images

//SVG Images
const greenBinSVG = document.getElementById(`binGreenSVG`);
const yellowBinSVG = document.getElementById(`binYellowSVG`);
const redBinSVG = document.getElementById(`binRedSVG`);

//green bin SVG
//green Bin
greenBinSVG.addEventListener(`mouseenter`, function () {
  greenBinSVG.classList.add(`binGreenHoverSVG`);
});
greenBinSVG.addEventListener(`mouseleave`, function () {
  greenBinSVG.classList.remove(`binGreenHoverSVG`);
});
greenBinSVG.addEventListener(`click`, function () {
  greenBinSVG.classList.add(`binGreenActiveSVG`);
  yellowBinSVG.classList.remove(`binYellowActiveSVG`);
  redBinSVG.classList.remove(`binRedActiveSVG`);
});

//yellow bin
yellowBinSVG.addEventListener(`mouseenter`, function () {
  yellowBinSVG.classList.add(`binYellowHoverSVG`);
});
yellowBinSVG.addEventListener(`mouseleave`, function () {
  yellowBinSVG.classList.remove(`binYellowHoverSVG`);
});
yellowBinSVG.addEventListener(`click`, function () {
  greenBinSVG.classList.remove(`binGreenActiveSVG`);
  yellowBinSVG.classList.add(`binYellowActiveSVG`);
  redBinSVG.classList.remove(`binRedActiveSVG`);
});
//Red bin
redBinSVG.addEventListener(`mouseenter`, function () {
  redBinSVG.classList.add(`binRedHoverSVG`);
});
redBinSVG.addEventListener(`mouseleave`, function () {
  redBinSVG.classList.remove(`binRedHoverSVG`);
});
redBinSVG.addEventListener(`click`, function () {
  greenBinSVG.classList.remove(`binGreenActiveSVG`);
  yellowBinSVG.classList.remove(`binYellowActiveSVG`);
  redBinSVG.classList.add(`binRedActiveSVG`);
});

//SVG Images
const greenBinSVGBtn = document.getElementById(`binGreenSVGBtn`);
const yellowBinSVGBtn = document.getElementById(`binYellowSVGBtn`);
const redBinSVGBtn = document.getElementById(`binRedSVGBtn`);

//green bin SVG in checkboxes
//get green Bin
const greenWasteBin = document.getElementById(`greenWasteBinImage`);
const GreenBinResult = document.getElementById("binGreenSVGBtn");
//get yellow bin
const yellowWasteBin = document.getElementById(`yellowWasteBinImage`);
const yellowBinResult = document.getElementById("binYellowSVGBtn");
//get Red bin
const redWasteBin = document.getElementById(`redWasteBinImage`);
const redBinResult = document.getElementById("binRedSVGBtn");

const greenBinActive = function () {
  //Green
  GreenBinResult.checked = true;
  greenWasteBin.style.background = "url(wheelieBinGreenActive.svg) no-repeat";
  greenWasteBin.style.backgroundPosition = "center";
  //Yellow
  yellowBinResult.checked = false;
  yellowWasteBin.style.background = "url(wheelieBinYellow.svg) no-repeat";
  yellowWasteBin.style.backgroundPosition = "center";
  //Red
  redBinResult.checked = false;
  redWasteBin.style.background = "url(wheelieBinRed.svg) no-repeat";
  redWasteBin.style.backgroundPosition = "center";
};

const yellowBinActive = function () {
  //Green
  GreenBinResult.checked = false;
  greenWasteBin.style.background = "url(wheelieBinGreen.svg) no-repeat";
  greenWasteBin.style.backgroundPosition = "center";
  //Yellow
  yellowBinResult.checked = true;
  yellowWasteBin.style.background = "url(wheelieBinYellowActive.svg) no-repeat";
  yellowWasteBin.style.backgroundPosition = "center";
  //Red
  redBinResult.checked = false;
  redWasteBin.style.background = "url(wheelieBinRed.svg) no-repeat";
  redWasteBin.style.backgroundPosition = "center";
};

const redBinActive = function () {
  //Green
  GreenBinResult.checked = false;
  greenWasteBin.style.background = "url(wheelieBinGreen.svg) no-repeat";
  greenWasteBin.style.backgroundPosition = "center";
  //Yellow
  yellowBinResult.checked = false;
  yellowWasteBin.style.background = "url(wheelieBinYellow.svg) no-repeat";
  yellowWasteBin.style.backgroundPosition = "center";
  //Red
  redBinResult.checked = true;
  redWasteBin.style.background = "url(wheelieBinRedActive.svg) no-repeat";
  redWasteBin.style.backgroundPosition = "center";
};

GreenBinResult.checked = false;
yellowBinResult.checked = false;
redBinResult.checked = false;

greenWasteBin.addEventListener(`click`, function () {
  greenBinActive();
});

yellowWasteBin.addEventListener(`click`, function () {
  yellowBinActive();
});

//Red bin
redWasteBin.addEventListener(`click`, function () {
  redBinActive();
});

//single SVG

//on window load
window.onload = function () {
  //get the div to change display type
  const greenBinImageObjectDiv = document.getElementById(`binGreenSingleSVG`);
  const yellowBinImageObjectDiv = document.getElementById(`binYellowSingleSVG`);
  const redBinImageObjectDiv = document.getElementById(`binRedSingleSVG`);

  //get the green bin object, then the SVG document inside the Object tag, then the SVG items/layors by ID;

  //Green Bin
  const greenObject = document.getElementById(`binGreenSingleSVG`);
  const greenSVGDoc = greenObject.contentDocument;
  //background cirles
  //blue
  const gBinCirleLayer = greenSVGDoc.getElementById(`backgroundCircleColour`);
  //green
  const gBinGreenCircle = greenSVGDoc.getElementById(`GreenCircle`);
  const gBinBlueCircle = greenSVGDoc.getElementById(`BlueCircle`);
  const gBinBlueTick = greenSVGDoc.getElementById(`Tick`);

  //green bin initialization settings
  const greenBinInitialization = function () {
    //display none yellow and red circles
    greenSVGDoc.getElementById(`RedCircle`).setAttribute("display", "none");
    greenSVGDoc.getElementById(`YellowCircle`).setAttribute("display", "none");
    gBinGreenCircle.style.display = "none";
    gBinBlueTick.style.display = "none";
    gBinBlueCircle.style.display = "none";
    greenSVGDoc.getElementById(`yellowLid`).setAttribute("display", "none");
    greenSVGDoc.getElementById(`redLid`).setAttribute("display", "none");
  };

  //yellow bin
  const yellowObject = document.getElementById(`binYellowSingleSVG`);
  const yellowSVGDoc = yellowObject.contentDocument;
  //background cirles
  //blue
  const yBinCirleLayer = yellowSVGDoc.getElementById("backgroundCircleColour");
  //yellow
  const yBinYellowCircle = yellowSVGDoc.getElementById(`YellowCircle`);
  const yBinBlueCircle = yellowSVGDoc.getElementById(`BlueCircle`);
  const yBinBlueTick = yellowSVGDoc.getElementById(`Tick`);

  //yellow bin initialization settings
  const yellowBinInitialization = function () {
    //display none yellow and red circles
    yellowSVGDoc.getElementById(`GreenCircle`).setAttribute("display", "none");
    yellowSVGDoc.getElementById(`RedCircle`).setAttribute("display", "none");
    yBinYellowCircle.style.display = "none";
    yBinBlueTick.style.display = "none";
    yBinBlueCircle.style.display = "none";
    yellowSVGDoc.getElementById(`redLid`).setAttribute("display", "none");
    yellowSVGDoc.getElementById(`greenLid`).setAttribute("display", "none");
  };

  //Red bin
  const redObject = document.getElementById(`binRedSingleSVG`);
  const redSVGDoc = redObject.contentDocument;
  //background cirles
  //blue
  const rBinCirleLayer = redSVGDoc.getElementById(`backgroundCircleColour`);
  //red
  const rBinRedCircle = redSVGDoc.getElementById(`RedCircle`);
  const rBinBlueCircle = redSVGDoc.getElementById(`BlueCircle`);
  const rBinBlueTick = redSVGDoc.getElementById(`Tick`);

  //Red bin initialization settings
  const redBinInitialization = function () {
    //display none yellow and red circles
    redSVGDoc.getElementById(`GreenCircle`).setAttribute("display", "none");
    redSVGDoc.getElementById(`YellowCircle`).setAttribute("display", "none");
    rBinRedCircle.style.display = "none";
    rBinBlueTick.style.display = "none";
    rBinBlueCircle.style.display = "none";
    redSVGDoc.getElementById(`yellowLid`).setAttribute("display", "none");
    redSVGDoc.getElementById(`greenLid`).setAttribute("display", "none");
  };
  greenBinInitialization();
  yellowBinInitialization();
  redBinInitialization();

  //setting images to iline-block after initialization so the user doesn't see the changes
  greenBinImageObjectDiv.style.display = "inline-block";
  yellowBinImageObjectDiv.style.display = "inline-block";
  redBinImageObjectDiv.style.display = "inline-block";

  //green Bin
  document
    .getElementById(`greenBinDiv`)
    .addEventListener(`mouseenter`, function () {
      if (gBinBlueCircle.style.display === "block") {
        gBinGreenCircle.style.display = "none";
      }
      if (gBinBlueCircle.style.display === "none") {
        gBinGreenCircle.style.display = "block";
      }
    });
  document
    .getElementById(`greenBinDiv`)
    .addEventListener(`mouseleave`, function () {
      gBinGreenCircle.style.display = "none";
    });
  document
    .getElementById(`greenOverlayDiv`)
    .addEventListener(`click`, function () {
      gBinBlueTick.style.display = "block";
      gBinBlueCircle.style.display = "block";
      gBinGreenCircle.style.display = "none";
      yellowBinInitialization();
      redBinInitialization();
    });

  //Yellow
  document
    .getElementById(`yellowBinDiv`)
    .addEventListener(`mouseenter`, function () {
      if (yBinBlueCircle.style.display === "block") {
        yBinYellowCircle.style.display = "none";
      }
      if (yBinBlueCircle.style.display === "none") {
        yBinYellowCircle.style.display = "block";
      }
    });

  document
    .getElementById(`yellowBinDiv`)
    .addEventListener(`mouseleave`, function () {
      yBinYellowCircle.style.display = "none";
    });
  document
    .getElementById(`yellowOverlayDiv`)
    .addEventListener(`click`, function () {
      yBinBlueTick.style.display = "block";
      yBinBlueCircle.style.display = "block";
      yBinYellowCircle.style.display = "none";
      greenBinInitialization();
      redBinInitialization();
    });

  //red
  document
    .getElementById(`redBinDiv`)
    .addEventListener(`mouseenter`, function () {
      if (rBinBlueCircle.style.display === "block") {
        rBinRedCircle.style.display = "none";
      }
      if (rBinBlueCircle.style.display === "none") {
        rBinRedCircle.style.display = "block";
      }
    });

  document
    .getElementById(`redBinDiv`)
    .addEventListener(`mouseleave`, function () {
      rBinRedCircle.style.display = "none";
    });
  document
    .getElementById(`redOverlayDiv`)
    .addEventListener(`click`, function () {
      rBinBlueTick.style.display = "block";
      rBinBlueCircle.style.display = "block";
      rBinRedCircle.style.display = "none";
      greenBinInitialization();
      yellowBinInitialization();
    });
};
