// const images = []
// images[0] = "./img/1.jpg";
// images[1] = "./img/2.jpg";
// images[2] = "./img/3.jpg";
// images[3] = "./img/4.jpg";
// images[4] = "./img/5.jpg";
// images[5] = "./img/6.jpg";

// usedImages = [];

// changeImage();

// function changeImage() {
//     const index = Math.floor(Math.random() * (images.length)),
//     thisImage = images[index];

//     // delay is 500 if image is .gif, and 100 if anything else
//     const delay = thisImage.match(/\.gif$/) ? 500 : 100;
//     setTimeout(changeImage, delay);

//     usedImages.push(thisImage);
//     images.splice(index, 1);

//     if (images.length < 1) {
//         images = usedImages.splice(0, usedImages.length);
//     }

//     const imgStr = '<img src="' + thisImage + '" alt = "">';
//     document.write(imgStr);
//     document.close();
// }

// window.onload = choosePic;

var myPix = new Array("./img/1.jpg", "./img/2.jpg", "./img/3.jpg");

// function choosePic() {
//   var randomNum = Math.floor(Math.random() * myPix.length);
//   document.getElementById("myPicture").src = myPix[randomNum];

  
// }

setInterval(function() {
  var randomNum = Math.floor(Math.random() * myPix.length);
  document.getElementById("myPicture").src = myPix[randomNum];
}, 2000)

// choosePic()
