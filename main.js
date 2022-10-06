nose_x=0;
nose_y=0;
left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(530,530);
    canvas.position(560,110);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
background('#13FF00');
document.getElementById("square_sides").innerHTML="Width and Height of a Square will be "+difference+"px";
fill('#f6ff00');
stroke('#2400ff');
square(nose_x,nose_y,difference);
}
function modelLoaded(){
    console.log("Model Is Loaded");
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose y= "+nose_y+" nose x= "+nose_x);
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference=floor(right_wrist_x-left_wrist_x);
        console.log("left wrist x= "+left_wrist_x+"right wrist x"+right_wrist_x+"difference"+difference);
    }
}