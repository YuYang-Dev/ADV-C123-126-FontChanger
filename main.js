noseX = 0;
noseY = 0;
difference = 0.000000000000000;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(results)
{
    if(results.length >= 1)
    {
        console.log(results);
    }
}

function draw()
{
    background('#969A97');
    //document.getElementById("square_side").innerHTML = "Width and Height of square will be = " + difference +"px";
    fill('#0fd13f')
    stroke('#000000')
    textSize(difference - 40.000000000000000000000000000000000000000000);
    text("hydrogen hydroxide enjoyer", 90, 290);
}

function gotPoses(results)
{

    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor( leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}