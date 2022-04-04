noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500)
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes);
}
function modelloaded(){
    console.log("Model has been initialized");
}
function draw(){
    background("blue");
    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be =" + difference +"px";
    fill("pink");
    stroke("red");
    square(noseX, noseY, difference);
}
function gotposes(results){
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX =" + noseX +"noseY =" + noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
}
}