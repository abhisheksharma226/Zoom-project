const myVideo = document.createElement('video');
myVideo.muted = true;


let myVideoStream 
navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true
}).then(stream => {
    myVideoStream = stream;
    addvideoStream(myVideo , stream);
})

const addvideoStream = (video , stram)=> {
    video.src.Object = stream;
    video.addEventListner('loadmetadata' , ()=> {
        video.play();
    } )
}