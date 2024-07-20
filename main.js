song1="";
song2="";

song1_status="";
song2_status="";

scoreRightWrist =0;
scoreLeftWrist =0;

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;

        console.log("scoreLeftWrist =" + scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX=" + leftWristX +" leftWristY=" + leftWristY);


        righttWristX=results[0].pose.rightWrist.x;
        righttWristY=results[0].pose.righttWrist.y;
        console.log("rightWristX=" + rightWristX +" rightWristY=" + rightWristY);
    }
}
function modelLoaded(){
    console.log('Posenet is Initialized');
}
function draw(){
    image(video,0,0,600,500);

    song1_status= song1.isPlaying();
    song2_status= song1.isPlaying();


    fill("FFF0000");
    stroke("FFF000");

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals= floor(InNumberleftWristY);
    leftWristY_divide_1000*2;
    volume= leftWristY_divide_1000 * 2;
    document.getElementById("volume").innerHTML="Volume= " + volume;
    song.setVoume(volume);
    }

}
function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("Record(online-voice-recorder.com (4).mp3)");
}
function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}