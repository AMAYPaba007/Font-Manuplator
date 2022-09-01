
leftWristX= 0;
rightWristX= 0;
difference= 0;

function preload() {}

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 500);
  canvas.position(750, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

}

function modelLoaded() {
  console.log("Model is working");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);

    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;

difference= Math.floor(leftWristX - rightWristX);

console.log("left wrist X = "+ leftWristX+ " right wrist x = "+rightWristX+ " difference = "+ difference);

  }
}

function draw() {

    background("pink");
    document.getElementById("FontSize").innerHTML= 
    "Size of the Font = "+ difference+ " px";

    fill("blue");
    stroke("blue");

    textSize(difference);
    text("Font", 50, 400);
}
