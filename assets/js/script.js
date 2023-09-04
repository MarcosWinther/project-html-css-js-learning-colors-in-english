let engine = {
   "colors": ['green', 'purple', 'pink', 'red', 'yellow', 'orange', 'grey', 'blue', 'black'],
   'hexadecimal': {
      'green': '#02EF00',
      'purple': '#790093',
      'pink': '#F02A7E',
      'red': '#E90808',
      'yellow': '#E7D703',
      'orange': '#F16529',
      'grey': '#EBEBEB',
      'blue': '#0000FF',
      'black': '#141414'
   },
   'coins': 0
}

function drawColors() {
   let indexDrawnColor = Math.floor(Math.random() * engine.colors.length);
   let legendColorInTheBox = document.getElementById('color-in-the-box');
   let drawnColorName = engine.colors[indexDrawnColor];

   legendColorInTheBox.innerHTML = drawnColorName.toUpperCase();

   return engine.colors[drawnColorName];
}

function applyColorToBox(colorName) {
   let colorBox = document.getElementById('current-color');

   colorBox.style.backgroundColor = colorName;
   colorBox.style.backgroundImage = "url('../imgs/caixa-fechada.png')";
   colorBox.style.backgroundSize = "100%";
}