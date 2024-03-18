const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement('video');
myVideo.muted = true;

let myVideoStream 
navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true,
}).then(stream => {
    myVideoStream = stream;
    addvideoStream(myVideo , stream);
})

const addvideoStream = (video , stream)=> {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata' , ()=> {
        video.play();
    } )

    videoGrid.append(video);
}