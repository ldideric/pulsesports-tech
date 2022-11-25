export async function main() {
    const progressscripts = await import('../js/progress.js');
    progressscripts.main('init');

    function addListener(nodes, type) {
        nodes.forEach(i => {
            i.addEventListener('click', () => {
                progressscripts.main(type);
            })
        });
    }

    const nextbutton = document.querySelectorAll('.carousel-control-next');
    const prevbutton = document.querySelectorAll('.carousel-control-prev')
    addListener(nextbutton, 'next');
    addListener(prevbutton, 'prev');

    if (localStorage.getItem('darkMode') == 'true') {
        document.querySelectorAll('.carousel').forEach(i => {
            i.classList.remove('carousel-dark');
            i.classList.add('carousel-white')
        });
    }
}