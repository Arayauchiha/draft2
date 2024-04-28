// Update the current year in the footer
document.getElementById('current-year').innerText = new Date().getFullYear();

// Add event listener to the "Home" button
document.getElementById('home-link').addEventListener('click', function() {
    window.location.href = 'homepage.html';
});