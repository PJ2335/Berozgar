const videoContainer = document.getElementById("video-container");
const videoElement = document.getElementById("video");

// Define the video sources for web and phone
const webVideoSource = "web-video.mp4";
const phoneVideoSource = "phone-video.mp4";

// Check the screen width to determine which video to load
if (window.innerWidth <= 768) {
    // Load the phone video for screens with a width of 768 pixels or less
    videoContainer.style.paddingTop = "177.77%"; // 9:16 aspect ratio for phones
    videoElement.src = phoneVideoSource;
} else {
    // Load the web video for larger screens
    videoContainer.style.paddingTop = "56.25%"; // 16:9 aspect ratio for web
    videoElement.src = webVideoSource;
}
