SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function start(){
    document.getElementById("textarea").innerHTML = " ";
    recognition.start();
}
 

    recognition.onresult = function (event){
        console.log(event);
        speech = event.results[0][0].transcript;
        document.getElementById("textarea").innerHTML = speech;
        
        if(speech == "take my selfie"){
            speak()
            Webcam.attach("#camera");
            
            setTimeout(function(){
                Webcam.snap(function(data_uri){
                    document.getElementById("camera").innerHTML = '<img id="selfie" src="' + data_uri + '">';
                })
            },5000)
                
           
    
        }
        else{
            window.alert("i only respnd 'take my selfie'")
        }
    }


    function speak(){
        synth = window.speechSynthesis
        text = "taking your selfie in 5seconds 5  4  3  2  1"
        voice = new SpeechSynthesisUtterance(text);
        synth.speak(voice);
        

    }


    Webcam.set({
        width : 340,
        height : 250,
        image_format : "jpg",
        jpg_quality : 10000000000000
    })

    function save(){
        atag = document.getElementById("atag");
        selfie = document.getElementById("selfie");
        atag.href = selfie.src;
        atag.click();
    }


    
