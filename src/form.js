const form = document.querySelector("#form");
const input = document.querySelector("#videoInput");

input.addEventListener("change", function() {
    var media = URL.createObjectURL(this.files[0]);
    console.log(media);
    var video = document.getElementById("video");
    video.src = media;
    video.style.display = "block";
});