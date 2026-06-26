const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {

    if(video.style.display === "none"){
        video.style.display = "block";
        video.play();
    }
    else{

        if(video.paused){
            video.play();
        }
        else{
            video.style.display = "none";
        }

    }

});