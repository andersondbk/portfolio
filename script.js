function enlargeImage(imgId) {
    const img = document.getElementById(imgId);
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<span class="close">&times;</span><img class="modal-content" id="modal-${imgId}">`;
    document.body.appendChild(modal);

    const modalImg = document.getElementById(`modal-${imgId}`);
    modalImg.src = img.src;
    modal.style.display = "block";

    const span = modal.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        modal.remove(); // Clean up by removing the modal from the DOM after closing
    }
}
