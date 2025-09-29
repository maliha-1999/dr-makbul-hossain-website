// ===== Lightbox =====
function openLightbox(img)
 {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

// Close lightbox when clicking outside the image or on the close button
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Optional: Close lightbox with ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape")
     {
    closeLightbox();
  }
});
