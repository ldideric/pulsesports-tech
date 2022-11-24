// Check when opening site

CheckTheme();

function CheckTheme() {
    if (localStorage.darkMode=="true") {
        document.body.classList.toggle("dark");
    }
}