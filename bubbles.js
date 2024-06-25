document.addEventListener('DOMContentLoaded', function () {
    const bubblesContainer = document.getElementById('bubbles');
    const bubbleCount = 30;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.width = `${Math.random() * 80 + 20}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubblesContainer.appendChild(bubble);
    }

    document.addEventListener('mousemove', (e) => {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach((bubble) => {
            const bubbleRect = bubble.getBoundingClientRect();
            const dx = bubbleRect.left + bubbleRect.width / 2 - e.clientX;
            const dy = bubbleRect.top + bubbleRect.height / 2 - e.clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const moveX = Math.cos(angle) * 100;
                const moveY = Math.sin(angle) * 100;
                bubble.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                bubble.style.transform = 'translate(0, 0)';
            }
        });
    });
});
