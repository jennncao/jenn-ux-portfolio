document.addEventListener('DOMContentLoaded', function () {
    // Create the cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Add cursor effects on hover for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, label');

    interactiveElements.forEach((el) => {
        el.addEventListener('mouseover', () => {
            cursor.style.background = 'rgba(8, 212, 243, 0.2)'; // Change color
            cursor.style.transform = 'translate(-50%, -50%) scale(1.2)';
            el.style.cursor = 'none'; // Hide the default pointer cursor on interactive elements
        });

        el.addEventListener('mouseout', () => {
            cursor.style.background = 'rgba(243, 8, 235, 0.2)'; // Default color
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            el.style.cursor = 'none'; // Ensure the default pointer cursor is hidden when not hovering
        });
    });

    // Ensure the custom cursor is always visible
    document.addEventListener('mouseover', (e) => {
        if (!e.target.closest('a, button, input, textarea, select, label')) {
            document.body.style.cursor = 'none'; // Ensure the default cursor is hidden
        }
    });
});