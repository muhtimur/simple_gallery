// Открытие модального окна с изображением
function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
