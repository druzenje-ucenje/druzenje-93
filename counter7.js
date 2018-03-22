document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;

    // ili ovako sa varijablom
    // var dugme = document.querySelector('button');
    // dugme.onclick = count;
    // dugme.style.color = 'red';
})

var counter = 0;

function count() {
    counter++;
    document.querySelector('#counter').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Counter is at ${counter}`)
    }
}
