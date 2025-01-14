// JavaScript for opening and closing the popup modal
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

// Open the popup when the page loads
window.onload = () => {
    setTimeout(() => {
        popup.style.display = 'flex'; // Show the popup
    }, 2000); // Popup will appear after 2 seconds
};

// Close the popup when clicking the close button
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});