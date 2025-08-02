let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day= new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }
    else if (hours>=16 && hours <20){
        speak("Good Evening Sir")
    }
    else{
        speak("Good Night Sir")
    }
}

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("Heyy")){
        speak("Hello sir,what can i help you?")
    }
    else if(message.includes("what is your name")){
        speak("My name is Sara")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Saurabh & Guruprasad")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("play song")){
        speak("playing song...")
        window.open("https://youtu.be/emh8zR4ZqZ0?si=qNOKNVo4DlYi5Yii","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin..")
        window.open("https://in.linkedin.com/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("https://www.whatsapp.com/","_blank")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("sara","") || message.replace("sara","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("sara","")}`,"_blank")
    }
}