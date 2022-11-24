export async function main() {
    const progressscripts = await import('./progress.js');
    progressscripts.main();
}