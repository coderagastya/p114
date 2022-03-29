Webcam.set({
    width:350,
    height:350,
image_format:"png",
png_quality:90
})

camera=document.getElementById("camera")

Webcam.attach("#camera")

function take_snapshot() {
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">'
})
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yj3mBkzah/model.json',modelLoaded)

function modelLoaded(){
    console.log('modelloaded');
}

function speak() {
    var synth=window.speechSynthesis
    speak_data1="the first prediction is"+prediction1;
    var utterThis= new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
}

function check() {
    img=document.getElementById("captured_image")
    classifier.classify(img , gotResult)
}
function gotResult(error,results){
if(error){
   console.error(error)
}
else {
   console.log(results);
   document.getElementById("result_emotion_name").innerHTML=results[0].label
   prediction1=results[0].label
   prediction2=results[1].label
   speak()

   if(results[0].label=="happy"){
       document.getElementById("update_emoji").innerHTML="&#128522"
   }

   if(results[0].label=="sad"){
       document.getElementById("update_emoji").innerHTML="&#128532;"
   }

   if(results[0].label=="angry"){
       document.getElementById("update_emoji").innerHTML="&#128548"
   }
   
}
}


