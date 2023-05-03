var body, columns, array, column_width, context, logo, myElements, analyser, src, height;
body = document.querySelector('body');

columns = 33;

array = new Uint8Array(columns * 2);

column_width = 15;

window.onclick = function () {

    if (context) return;

    body.querySelector('h1').remove();

    for (var i = 0; i < columns; i++) {
        logo = document.createElement('div');
        logo.className = 'logo';
        logo.style.background = 'white';
        logo.style.minWidth = column_width + 'px';
        body.appendChild(logo);
    }

    myElements = document.getElementsByClassName('logo');
    context = new AudioContext();
    analyser = context.createAnalyser();

    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        src = context.createMediaStreamSource(stream);
        src.connect(analyser);
        loop();
    }).catch(error => {
        alert(error + '\r\n\ Отклонено. Страница будет обновлена!');
        location.reload();
    });
}

function loop() {
    window.requestAnimationFrame(loop);
    analyser.getByteFrequencyData(array);
    for (var i = 0; i < columns; i++) {
        height = array[i + columns];
        myElements[i].style.minHeight = height + 'px';
        myElements[i].style.opacity = 0.008 * height;
    }
}