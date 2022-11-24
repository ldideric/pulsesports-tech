let oldscripts = [];

async function get(path) { // Returns JSON of url/path
    let value;
    await fetch(path)
        .then(response => response.text())
        .then((data) => { value = data; });
    return value;
}

async function parseToHTML(text) {
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/html');
}

// load page
async function loadToPage(loadedhtml, page) {
    // shows / hides navbar based on page
    const navbar = document.querySelector('.navbar');
    if (page == 'login' || page == 'question') {
        navbar.style.opacity = 0;
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 150)
    } else if (page == 'profile') {

        navbar.style.display = 'inline';
        setTimeout(() => {
            navbar.style.opacity = 1;

            document.getElementById('toggle-theme').addEventListener('click', () => {
                darkLight2()
            });
    
            function darkLight2() {
                let cat = localStorage.getItem('darkMode');

                if (!cat) {
                    document.body.classList.toggle("dark");
                    localStorage.setItem('darkMode', true)
                } else {
                    document.body.classList.toggle("dark");
                    localStorage.setItem('darkMode', false)
                }
            }
        }, 300)
    } else {
        navbar.style.display = 'inline';
        setTimeout(() => {
            navbar.style.opacity = 1;
        }, 300)
    }
    const appendhere = document.querySelector('.appendhere');
    appendhere.style.opacity = 1;

    let timeout = 200;

    appendhere.style.opacity = 0;

    setTimeout(async () => {
        appendhere.innerHTML = '';
        const mainhead = document.querySelector('head');
        // Remove old scripts from html
        mainhead.querySelectorAll('script').forEach(i => {
            if (i.classList.contains('imported')) {
                i.parentNode.removeChild(i);
            }
        });
        oldscripts = [];
        // import styling
        let reqstylecount = 0;
        let stylecount = 0;
        const links = loadedhtml.querySelectorAll('link');
        links.forEach(i => {
            const style = document.createElement('link');
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", i.href)
            style.addEventListener('load', () => {
                stylecount++;
                checkStyleLoaded();
            })
            reqstylecount++;
            appendhere.appendChild(style);
        });
        
        async function checkStyleLoaded() {
            if (stylecount == reqstylecount) {
                const appendhere = document.querySelector('.appendhere');
                // import body
                const body = loadedhtml.querySelector('body');
                appendhere.appendChild(body);
                // import scripts
                const scripts = loadedhtml.querySelectorAll('head script');
                scripts.forEach(i => {
                    let script = document.createElement('script');
                    script.type = 'module';
                    script.src = i.src;
                    script.classList.add('imported');
                    mainhead.appendChild(script);
                });

                // import js script of page
                const remote = await import(`./${page}.js`);
                await remote.main();

                setTimeout(() => {
                    appendhere.style.opacity = 1;
                }, timeout)
            }
        }
    }, timeout)
}

// calls to load page
async function changePage(page) {
    const navbar = await import('./navbar.js')
    navbar.update(page);
    const loadedtext = await get(`../pageLoader/${page}.html`);
    const loadedhtml = await parseToHTML(loadedtext);
    await loadToPage(loadedhtml, page);
};

// Hash handler
function getHash() {
    return window.location.hash.substring(1);
};

window.addEventListener('hashchange', () => {
    if (getHash() == '' || getHash() == 'disable') {
        changePage('login');
    } else {
        changePage(getHash());
    }
})

if (getHash() == '' || getHash() == 'disable') {
    changePage('login');
} else {
    changePage(getHash());
}