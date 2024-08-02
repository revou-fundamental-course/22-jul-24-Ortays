function formValidation() {
    let name = document.forms["myForm"]['fname'].value;
    console.log(name);

    if (name == '') {
        alert('Wajib diisi!')
    } else {
        alert('Sukses terkirim!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = ['image1', 'image2', 'image3'];
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        carousel.className = 'carousel ' + images[currentIndex];
    }

    setInterval(showNextImage, 3000);
});