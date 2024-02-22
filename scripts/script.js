function openModal(imageSrc, description, projectName) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalDescription = document.getElementById('modalDescription');
    var modalName = document.getElementById('modalName');
  
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalDescription.textContent = description;
    modalName.textContent = projectName;
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  // Close the modal if the overlay is clicked
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      closeModal();
    }
  };
  