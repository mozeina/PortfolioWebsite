let cuteCat = document.getElementById('javascript');

function revealImage() {
    console.log('hello')
    cuteCat.style.display = 'block';
    cuteCat.addEventListener('mouseout', function () {
        cuteCat.style.display = 'none';
    })
}

// Adding an event listener to trigger the function on mouseover


