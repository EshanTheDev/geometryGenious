function calculateTriangleArea(){
    // get base value of triangle
    const baseVAlue = document.getElementById('triangle-base').value ;
    const base = parseFloat(baseVAlue);
// console.log(typeof(base))

      // get height value of triangle
      const heightValue = document.getElementById('triangle-height').value ;
      const height =parseFloat(heightValue);
    //   console.log(height);
      const area = 0.5 * base * height ;
    //   console.log(area)

    // show triangle area 

    const areaSpan = document.getElementById('triangle-area');
     areaSpan.innerText=area ;

}


function calculateRectangleArea(){

// get width value of rectangle 
const widthtValue = document.getElementById('rectangle-w').value ;
const width = parseFloat(widthtValue);

// console.log(typeof(width))


// get length value of rectangle 

const lengthValue = document.getElementById('rectangle-l').value;
const length = parseFloat(lengthValue);
// console.log(typeof(length))


const area = width * length ;

// show rectangle area

const rectangleSpan = document.getElementById('rectangle-area');


rectangleSpan.innerText = area  ;


}

function parallelogramArea(){
  // get base value of parallelogram 
  const baseValue = document.getElementById('Parallelogram-base').value ;
  const base = parseFloat(baseValue);
  // get the heigth value of parallelogram
  const heigthValue = document.getElementById('Parallelogram-height').value ;
  const heigth = parseFloat(heigthValue) ;

const area = base * heigth ;
const parallelogramSpan = document.getElementById('Parallelogram-area');

parallelogramSpan.innerText = area 

}

// ----------------------------------- reuseable function


function RhombusArea(){

  const RhombusFirstVAlue = getInputValue('Rhombus-first');
const RhombusSecondValue = getInputValue('Rhombus-second');
const area = 0.5 * RhombusFirstVAlue * RhombusSecondValue ;
// console.log(area)
// area 

setElementInnertext('Rhombus-area',area);

}


// get value 
function getInputValue(fieldId){
const inputfield = document.getElementById(fieldId);
const valueText = inputfield.value ;
const value = parseFloat(valueText);
return value ;
}

// set value 
function setElementInnertext(id,area){

  const element = document.getElementById(id);
  element.innerText = area ;
}

// pentagon 
function pentagonArea(){
const pentagonFirstValue = getInputValue('pentagon-first');
const pentagonSecondValue = getInputValue('pentagon-second');

const area = 0.5 * pentagonFirstValue * pentagonSecondValue ;

setElementInnertext('pentagon-area',area );

}

// ellipse 

function ellipseArea(){

  const ellipseFirst = getInputValue('ellipse-first');
  const ellipseSecond = getInputValue('ellipse-second');
  const area = 3.1416 * ellipseFirst * ellipseSecond ;
  setElementInnertext('ellipse-area',area);
}