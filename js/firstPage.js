const textArea = document.querySelector('div.choosePicture');
const button = document.querySelector('div.addPhoto');

function changeOpacity() {
    document.querySelector('div.choosePicture').style.opacity = '1';
}

button.addEventListener('click', () => changeOpacity(textArea));