let a = 10.0; let b = 28.0; let c = 8.0/3.0; let dt = 0.01;
let points = new Array();
let points2 = new Array();
let v1 = new p5.Vector(0.01,0,0);
let v2 = new p5.Vector(0.011,0,0);
points.push(v1);
points2.push(v2);

function lorenz(vector) {
  let dx = a * (vector.y - vector.x) * dt;
  let dy = (vector.x * (b - vector.z) - vector.y) * dt;
  let dz = (vector.x * vector.y - c * vector.z) * dt;

  let newvector = createVector(vector.x+dx,vector.y+dy,vector.z+dz)
  return newvector;
}

function setup() { 
  createCanvas(800,800,WEBGL);
  colorMode(HSB);
}

function draw() {
  background(0);
  scale(8);
  rotateY(frameCount * 0.003);

  v1 = lorenz(v1);
  v2 = lorenz(v2);
  points.push(v1);
  points2.push(v2);  
  
  stroke('white');
  strokeWeight(8);
  point(v1.x,v1.y,v1.z);

  stroke('red');
  strokeWeight(8);
  point(v2.x,v2.y,v2.z);

  stroke('white');
  strokeWeight(1);
  noFill();
  beginShape();
  for (let v of points) {
    vertex(v.x, v.y, v.z);
  }
  endShape();

  stroke('red');
  beginShape();
  for (let v of points2) {
   vertex(v.x, v.y, v.z);
  }
  endShape();
}
