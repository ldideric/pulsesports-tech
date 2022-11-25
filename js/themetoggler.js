export function run() {
    if (localStorage.getItem('darkMode') == null) {
        localStorage.setItem('darkMode', 'false');
    }
    if (localStorage.getItem('darkMode') == 'false') {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.setItem('darkMode', 'false');
    }
    window.location.reload();
}

export function editbody() {
    const body = document.querySelector('body');
    if (localStorage.getItem('darkMode') == 'true') {
        body.classList.add('dark')
    }
}