document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

let next = document.querySelector('#card1');

next.addEventListener('click', function() {
    console.log("click")
    window.location.href="SejarahCrypto.html"
});

let move = document.querySelector('#card2');
move.addEventListener('click',function(){
    console.log("click")
    window.location.href="BTC.html"
});

let fungsi = document.querySelector('#card3');
fungsi.addEventListener('click',function(){
    console.log("click")
    window.location.href="kegunaan.html"
});