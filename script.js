
// 1. Define your constants (Stewardship of elements)
const btn = document.querySelector('#wishButton');
const title = document.querySelector('#message');

// 2. Add a single event listener
btn.addEventListener('click', function() {
    // Primary action: Update the greeting
    title.textContent = "You make every day special, Shireesha! ❤️";
    
    // Play background audio
    const audio = document.querySelector('#bgAudio');
    audio.play();
    
    // Secondary action: Provide feedback on the button
    btn.textContent = "Message Sent!";
    btn.disabled = true;
    
    // Logic check: Add a console log for debugging (Analytics)
    console.log("Surprise message triggered successfully.");
    
    // Reset button after 3 seconds
    setTimeout(() => {
        btn.textContent = "Click for a surprise!";
        btn.disabled = false;
    }, 3000);
});