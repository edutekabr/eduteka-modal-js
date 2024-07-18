const btnModal = document.getElementById('btn-modal');
const modalBox = document.getElementById('modal-box');
const iconModalClose = document.getElementById('modal-close');

const openModal = () => modalBox.classList.add('opened');
const closeModal = () => modalBox.classList.remove('opened');

btnModal.addEventListener('click', openModal);
iconModalClose.addEventListener('click', closeModal);