// Toggle the “read more” paragraph
document.getElementById('moreBtn').addEventListener('click', function () {
    const more = document.getElementById('moreText');
    const hidden = more.classList.toggle('hidden');
    this.textContent = hidden ? 'Read more ▼' : 'Read less ▲';
});