document.getElementById('pressMe').addEventListener('click', function() {
    // Add fade-out class to the button
    this.classList.add('fade-out');
    
    // Show the message after a delay
    setTimeout(() => {
        document.getElementById('message').classList.remove('hidden');
    }, 500); // Wait for the fade-out transition to complete
});

