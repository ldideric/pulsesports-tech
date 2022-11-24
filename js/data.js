const url = '../js/json/userdata.json'; // Path for clothing json

export async function get() { // Returns JSON of url/path
    let value;
    await fetch(url)
        .then(response => response.json())
        .then((data) => { value = data; });
    return value;
}
