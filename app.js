const btn = document.querySelector('.btn');
const adviceNum = document.querySelector('.id');
const adviceText = document.querySelector('.advice');

window.onload = returN ()

btn.addEventListener("click" , function (){
    returN ();

    let myAnimation=anime({
        targets: '.img',
        rotate:360,
        borderRadius: 50,
        duration: 1000,
        easing: 'easeInOutSine',
        direction: 'alternate',
    });

});


function returN (){
fetch('https://api.adviceslip.com/advice')
.then(response => response.json() )
.then(data => (data.slip))
  .then((data) => {
    adviceNum.textContent = data.id;
    adviceText.textContent = ` "${data.advice}" `;
})

}


