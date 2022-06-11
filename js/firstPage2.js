const textArea = document.querySelector('div.choosePicture');
const button = document.querySelector('div.addPhoto');

function changeOpacity() {
    document.querySelector('div.choosePicture').style.opacity = '1';
}

button.addEventListener('click', () => changeOpacity(textArea));

const list = document.querySelectorAll('.list');
        function activeLink() {
            list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item) => item.addEventListener('click', activeLink));