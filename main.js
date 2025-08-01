const body = document.body;

const offcanvas = document.getElementById('offcanvasNav');
const closeBtn = document.getElementById('closeBtn');

let offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

// Intercept the close button
closeBtn.addEventListener('click', () => {
    offcanvas.classList.remove('show');
    offcanvas.classList.add('hide-anim');

    // Wait for animation to finish before hiding completely
    setTimeout(() => {
        offcanvas.classList.remove('hide-anim');
        offcanvasInstance.hide(); // Properly hide with Bootstrap
    }, 400); // Match CSS transition duration
});



function main() {
    body.innerHTML = ` `
};
