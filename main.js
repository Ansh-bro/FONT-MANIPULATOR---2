function setup()
{
   video = createCapture(VIDEO);
   video.size(550,500);
   canvas = createCanvas(560,500);
   canvas.position(550,150);
   poseNet = ml5.poseNet(video, modelLoaded);
}

function draw()
{
    background('#7502FC');
}

function modelLoaded()
{
   console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

