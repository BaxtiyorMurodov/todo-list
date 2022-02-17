let form = document.querySelector('form');
let toDoInput = document.querySelector(".toDoInput");
let toDoContainer = document.querySelector("#toDoContainer");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let qoshilgan = document.createElement('p')
    qoshilgan.classList.add("todoadd");
    qoshilgan.innerText = toDoInput.value;
    toDoContainer.appendChild(qoshilgan);
    toDoInput.value = '';
    qoshilgan.addEventListener('click', () => {
        qoshilgan.style.textDecoration = 'line-through'
    })
    qoshilgan.addEventListener('dblclick', () => {
        toDoContainer.removeChild(qoshilgan);
    })
})