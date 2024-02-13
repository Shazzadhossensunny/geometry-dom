// triangle
function inputSubmitBtnTriangle() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleBaseInputValue = triangleBaseInput.value;
  const triangleHeightInputValue = triangleHeightInput.value;
  const newTriangleBaseInputValue = parseFloat(triangleBaseInputValue);
  const newTriangleHeightInputValue = parseFloat(triangleHeightInputValue);
  triangleBaseInput.value = " ";
  triangleHeightInput.value = " ";
  let area = 0.5 * newTriangleBaseInputValue * newTriangleHeightInputValue;
  area = parseFloat(area.toFixed(3));
  const innerTextShow = document.getElementById("inner-text-triangle");
  innerTextShow.innerText = area;
  const calculationShow = document.getElementById('calculation-show');
  const p = document.createElement('p');
  p.innerText = `Triangle Area ${area} cm2`;
  p.classList.add('pera');
  p.style.fontSize = "20px";
  calculationShow.appendChild(p);
}
// triangle hover effect
document.getElementById('triangle-card').addEventListener('mouseover', function(){
  const triangleCard = document.getElementById('triangle-card');
  triangleCard.style.backgroundColor = 'rgb(251, 188, 237)';
  triangleCard.style.transition = '0.3s';
})
document.getElementById('triangle-card').addEventListener('mouseout', function(){
  const triangleCard = document.getElementById('triangle-card');
  triangleCard.style.backgroundColor = 'transparent';
})

// rectangle
function inputSubmitBtnRectangle() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthInputValue = rectangleWidthInput.value;
  const newRectangleWidthInputValue = parseFloat(rectangleWidthInputValue);
  rectangleWidthInput.value = " ";
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthInputValue = rectangleLengthInput.value;
  const newRectangleLengthInputValue = parseFloat(rectangleLengthInputValue);
  rectangleLengthInput.value = " ";
  let area = newRectangleWidthInputValue * newRectangleLengthInputValue;
  area = parseFloat(area.toFixed(3));
  const innerTextShow = document.getElementById("inner-text-rectangle");
  innerTextShow.innerText = area;
  const calculationShow = document.getElementById('calculation-show');
  const p = document.createElement('p');
  p.innerText = `Rectangle Area ${area} cm2`;
  p.classList.add('pera');
  p.style.fontSize = "20px";
  calculationShow.appendChild(p);
}

// rectangle hover effect
document.getElementById('rectangle-card').addEventListener('mouseover', function(){
  const rectangleCard = document.getElementById('rectangle-card');
  rectangleCard.style.backgroundColor = 'rgb(178, 240, 105)';
  rectangleCard.style.transition = '0.3s';
})
document.getElementById('rectangle-card').addEventListener('mouseout', function(){
  const rectangleCard = document.getElementById('rectangle-card');
  rectangleCard.style.backgroundColor = 'transparent';
})

// Parallelogram
function inputSubmitBtnParallelogram() {
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseInputValue = parallelogramBaseInput.value;
  const newParallelogramBaseInputValue = parseFloat(
    parallelogramBaseInputValue
  );
  parallelogramBaseInput.value = " ";
  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  );
  const parallelogramHeightInputValue = parallelogramHeightInput.value;
  const newParallelogramHeightInputValue = parseFloat(
    parallelogramHeightInputValue
  );
  parallelogramHeightInput.value = " ";
  let area = newParallelogramBaseInputValue * newParallelogramHeightInputValue;
  area = parseFloat(area.toFixed(3));
  const innerTextShow = document.getElementById("inner-text-parallelogram");
  innerTextShow.innerText = area;
  const calculationShow = document.getElementById('calculation-show');
  const p = document.createElement('p');
  p.innerText = `parallelogram Area ${area} cm2`;
  p.classList.add('pera');
  p.style.fontSize = "20px";
  calculationShow.appendChild(p);
}

// Parallelogram hover effect
document.getElementById('parallelogram-card').addEventListener('mouseover', function(){
  const parallelogramCard = document.getElementById('parallelogram-card');
  parallelogramCard.style.backgroundColor = 'rgb(204, 204, 255)';
  parallelogramCard.style.transition = '0.3s';
})
document.getElementById('parallelogram-card').addEventListener('mouseout', function(){
  const parallelogramCard = document.getElementById('parallelogram-card');
  parallelogramCard.style.backgroundColor = 'transparent';
})

// Rhombus
function inputSubmitBtnRhombus() {
  const rhombusBaseInput = document.getElementById("rhombusd1");
  const rhombusBaseInputValue = rhombusBaseInput.value;
  const newRhombusBaseInputValue = parseFloat(rhombusBaseInputValue);
  rhombusBaseInput.value = " ";
  const rhombusHeightInput = document.getElementById("rhumbusd2");
  const rhombusHeightInputValue = rhombusHeightInput.value;
  const newRhombusHeightInputValue = parseFloat(rhombusHeightInputValue);
  rhombusHeightInput.value = " ";
  let area = 0.5 * newRhombusBaseInputValue * newRhombusHeightInputValue;
  area = parseFloat(area.toFixed(3));
  const innerTextShow = document.getElementById("inner-text-rhombus");
  innerTextShow.innerText = area;
  const calculationShow = document.getElementById('calculation-show');
  const p = document.createElement('p');
  p.innerText = `Rhombus Area ${area} cm2`;
  p.classList.add('pera');
  p.style.fontSize = "20px";
  calculationShow.appendChild(p);
}
// Rhombus hover effect
document.getElementById('rhombus-card').addEventListener('mouseover', function(){
  const rhombusCard = document.getElementById('rhombus-card');
  rhombusCard.style.backgroundColor = 'rgb(105, 199, 240)';
  rhombusCard.style.transition = '0.3s';
})
document.getElementById('rhombus-card').addEventListener('mouseout', function(){
  const rhombusCard = document.getElementById('rhombus-card');
  rhombusCard.style.backgroundColor = 'transparent';
})
// Pentagon
function inputSubmitBtnPentagon() {
  const pentagonBaseInput = document.getElementById("pentagon-polygon");
  const pentagonBaseInputValue = pentagonBaseInput.value;
  const newPentagonBaseInputValue = parseFloat(pentagonBaseInputValue);
  pentagonBaseInput.value = " ";
  const pentagonHeightInput = document.getElementById("pentagoan-apothem");
  const pentagonHeightInputValue = pentagonHeightInput.value;
  const newPentagonHeightInputValue = parseFloat(pentagonHeightInputValue);
  pentagonHeightInput.value = " ";
  let area = 0.5 * newPentagonBaseInputValue * newPentagonHeightInputValue;
  area = parseFloat(area.toFixed(3));
  const innerTextShow = document.getElementById("inner-text-pentagon");
  innerTextShow.innerText = area;
  const calculationShow = document.getElementById('calculation-show');
  const p = document.createElement('p');
  p.innerText = `Pentagon Area ${area} cm2`;
  p.classList.add('pera');
  p.style.fontSize = "20px";
  calculationShow.appendChild(p);
}
// pentagon hover effect

document.getElementById('pentagon-card').addEventListener('mouseover', function(){
  const pentagonCard = document.getElementById('pentagon-card');
  pentagonCard.style.backgroundColor = 'rgb(181, 169, 8)';
  pentagonCard.style.transition = '0.3s';
})
document.getElementById('pentagon-card').addEventListener('mouseout', function(){
  const pentagonCard = document.getElementById('pentagon-card');
  pentagonCard.style.backgroundColor = 'transparent';
})


//   Ellipse

function inputSubmitBtnEllipse() {
  const ellipseBaseInput = document.getElementById("ellipse-area");
  const ellipseBaseInputValue = ellipseBaseInput.value;
  const newEllipseBaseInputValue = parseFloat(ellipseBaseInputValue);
  ellipseBaseInput.value = " ";
  const ellipseHeightInput = document.getElementById("ellipse-base");
  const ellipseHeightInputValue = ellipseHeightInput.value;
  const newEllipseHeightInputValue = parseFloat(ellipseHeightInputValue);
  ellipseHeightInput.value = " ";
  let area = Math.PI * newEllipseBaseInputValue * newEllipseHeightInputValue;
  area = parseFloat(area.toFixed(3));
  const innerTextShow = document.getElementById("inner-text-ellipse");
  innerTextShow.innerText = area;
  const calculationShow = document.getElementById('calculation-show');
  const p = document.createElement('p');
  p.innerText = `Ellipse Area ${area} cm2`;
  p.classList.add('pera');
  p.style.fontSize = "20px";
  calculationShow.appendChild(p);
}

// ellipse hover effect
document.getElementById('ellipse-card').addEventListener('mouseover', function(){
  const ellipseCard = document.getElementById('ellipse-card');
  ellipseCard.style.backgroundColor = 'rgb(255, 193, 172)';
  ellipseCard.style.transition = '0.3s';
})
document.getElementById('ellipse-card').addEventListener('mouseout', function(){
  const ellipseCard = document.getElementById('ellipse-card');
  ellipseCard.style.backgroundColor = 'transparent';
})


// re-use function
// function inputSubmitBtnTriangle(){
//    const triangleBase  = inputGetElementId("triangle-base");
//    const triangleHeight  = inputGetElementId("triangle-height");
//    const area = 0.5 * triangleBase * triangleHeight;
//    setInnerTextId('inner-text-triangle', area);
//    const calculationShow = document.getElementById("calculation-show");
//   const p = document.createElement('p');
//   p.innerText = `Triangle Area ${area} cm2`;
//   calculationShow.appendChild(p);


// }

// function inputGetElementId(inputId){
//   const inputFieldId = document.getElementById(inputId);
//   const inputValue = inputFieldId.value;
//   const value = parseFloat(inputValue);
//   inputFieldId.value = " ";
//   return value;
// }

// function setInnerTextId (elementId, area){
//   const innerTextId = document.getElementById(elementId);
//   innerTextId.innerText = area;

// }
