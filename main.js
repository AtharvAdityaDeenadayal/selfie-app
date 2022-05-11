var SpeechRecognition=window.webkitSpeechRecognition;
Recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript ;
    document.getElementById("textbox").innerHTML=content;
    if(content=="Take my selfie."){
        speak();
    }

}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";

    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    camera=document.getElementById("camera");
    Webcam.set({
        width:360,
        height:250,
        image_format:'jpeg',
        jpeg_quality:90
    });
    Webcam.attach(camera);
    setTimeout(function()  {
        take_snapshot();
        save();
    }, 5000);
}
function take_snapshot(){
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML="<img id='selfie' src=' "+ data_uri+" '>";

});
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}