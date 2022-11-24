const themeToggleBtn = document.querySelector('.setting');

// Toggle by clicking the button

document.getElementById('toggle-theme').addEventListener('click', () => {
    darkLight()
});

function darkLight() {
    console.log('test')

    let cat = localStorage.getItem('darkMode');

    if (!cat) {
        document.body.classList.toggle("dark");
        localStorage.setItem('darkMode', true)
    } else {
        document.body.classList.toggle("dark");
        localStorage.setItem('darkMode', false)
        
    }
}