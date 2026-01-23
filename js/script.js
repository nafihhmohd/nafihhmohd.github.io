// Typewriter Effect Logic
const roles = ["Data Analyst", "BI Developer", "Junior Data Scientist", "Strategic Storyteller"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.querySelector("#typewriter");
const cursorElement = document.querySelector(".cursor"); // <--- ADD THIS

function type() {
    const currentWord = roles[wordIndex];
    
    // STOP the blink while the text is changing
    cursorElement.classList.remove("blink"); // <--- ADD THIS
    
    if (isDeleting) {
        // Remove characters
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add characters
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Adjust speed: deleting is faster than typing
    let typeSpeed = isDeleting ? 70 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        // START the blink when the word is fully typed
        cursorElement.classList.add("blink"); // <--- ADD THIS
        
        typeSpeed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Initialize the typewriter effect
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

const cta = document.querySelector('.cta-button');

cta.addEventListener('mousemove', (e) => {
    const rect = cta.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    // Slightly move the button towards the mouse
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (x - centerX) / 5;
    const moveY = (y - centerY) / 5;

    cta.style.transform = `translate(${moveX}px, ${moveY - 5}px) scale(1.05)`;
});

cta.addEventListener('mouseleave', () => {
    // Reset position when mouse leaves
    cta.style.transform = `translate(0px, 0px) scale(1)`;
});