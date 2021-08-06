const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass video to element, then play
async function selectMediaStream() {
    try {
        // wait until user has selected media stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        
        // pass media stream as the source to video element
        videoElement.srcObject = mediaStream;
        
        // when media stream finished loading, onloadedmetadata = true
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        console.log('Whoops, error here: ', error);

    }
}

button.addEventListener('click', async () => {
   // Disable button
   button.disabled = true;
   // Start Picture in Picture
   await videoElement.requestPictureInPicture();
   // Reset button
   button.disabled = false; 
});

// On Load
selectMediaStream();