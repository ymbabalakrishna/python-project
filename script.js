
// 1. Define your constants (Stewardship of elements)
const btn = document.querySelector('#wishButton');
const title = document.querySelector('#message');

// 2. Add a single event listener
btn.addEventListener('click', function() {
    // Primary action: Update the greeting
    title.textContent = "You make every day special, Shireesha! ❤️ Happy Valentine's Day!";
    
    // Play background audio
    const audio = document.querySelector('#bgAudio');
    audio.play();
    
    // Hide the button
    btn.style.display = 'none';
    
    // Create falling rose petals/confetti effect
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.innerHTML = '❤️'; // Rose petal emoji
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.top = '-10px';
        petal.style.fontSize = (Math.random() * 20 + 20) + 'px';
        petal.style.opacity = Math.random() * 0.5 + 0.5;
        petal.style.animation = `fall ${Math.random() * 2 + 3}s linear forwards`;
        document.body.appendChild(petal);
        
        setTimeout(() => petal.remove(), 5000);
    }
    
    // Create multiple petals
    for (let i = 0; i < 20; i++) {
        setTimeout(createPetal, i * 100);
    }
    
    // Secondary action: Provide feedback on the button
    btn.textContent = "Message Sent!";
    btn.disabled = true;
    
    // Logic check: Add a console log for debugging (Analytics)
    console.log("Surprise message triggered successfully.");
    
    // add image of siri from image folder
    const existingImg = document.querySelector('.siri-image');
    if (!existingImg) {
        const img = document.createElement('img');
        img.src = 'images/siri.jpeg';
        img.alt = 'Siri Image';
        img.classList.add('siri-image');
        document.querySelector('.mainclass').appendChild(img);
    }
});