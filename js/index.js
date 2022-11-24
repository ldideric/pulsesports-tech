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
    if (page == 'login') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'inline';
    }
    const appendhere = document.querySelector('.appendhere');
    appendhere.style.opacity = 1;

    let timeout = 200;
    if (localStorage.getItem('logotransition') == 'true') {
        timeout = 150;
    }

    setTimeout(() => {
        appendhere.style.opacity = 0;
    }, timeout)

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
        let stylecount = 0;
        const links = loadedhtml.querySelectorAll('link');
        links.forEach(i => {
            const style = document.createElement('link');
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", i.href)
            style.addEventListener('load', () => {
                stylecount++;
                loadMore()
            })
            appendhere.appendChild(style);
            // appendhere.appendChild(i)
        });
        
        async function loadMore() {
            const appendhere = document.querySelector('.appendhere');
            // console.log(stylecount)
            // console.log(appendhere)
            // import body
            const body = loadedhtml.querySelector('body');
            console.log('body ' + body)
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
            remote.main();
        }
    }, timeout * 2 + timeout / 7)
    setTimeout(() => {
        appendhere.style.opacity = 1;
    }, timeout * 4)
}

// calls to load page
async function changePage(page) {
    const loadedtext = await get(`../${page}.html`);
    const loadedhtml = await parseToHTML(loadedtext);
    loadToPage(loadedhtml, page);
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