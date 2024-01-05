// Thêm vào cuối tệp script.js hoặc trong thẻ <script> trong index.html
function openModal(imgElement) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');

    modal.style.display = 'block';
    modalImg.src = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
