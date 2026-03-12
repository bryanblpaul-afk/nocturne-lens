function scrollGallery(){

document.getElementById("gallery").scrollIntoView({
behavior:"smooth"
})

}

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("intro").style.opacity="0";

setTimeout(function(){
document.getElementById("intro").style.display="none";
},2000)

},3000)

})

function openViewer(img){

document.getElementById("viewer").style.display="flex"
document.getElementById("viewerImage").src = img.src

}

function closeViewer(){

document.getElementById("viewer").style.display="none"

}

function filterPhotos(category){

let photos = document.querySelectorAll(".photo")

photos.forEach(photo => {

if(category === "all"){
photo.style.display="block"
}

else if(photo.classList.contains(category)){
photo.style.display="block"
}

else{
photo.style.display="none"
}

})

}

document.addEventListener("contextmenu", function(e){
e.preventDefault()
})