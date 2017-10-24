var numbers = [23, 3, 65, "apple", "star"];


function setup() {
  createCanvas(800, 600);
  
  console.log (    numbers[3]    );
  
  numbers[3] = "banana";
  
    console.log (    numbers[3]    );
  
}

function draw() {
  background(255, 255, 0);

  textSize(36);
  fill(255, 0, 255);
  text('length of my array: ' + numbers.length, 0, 50);
  textSize(20);
  for (var i = 0; i < numbers.length; i++) {
    text('array index: [' + i + '] is: ' + numbers[i], 100, (i * 20) + 100);
  }
}

function mousePressed() {
  numbers.push(round(random(-100, 100)));
}

function keyPressed() {

    numbers.splice(numbers.length-1, 1);
     console.log("Array length: "+numbers.length);

}