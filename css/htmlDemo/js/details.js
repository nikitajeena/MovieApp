async function call(){
    const searchParams = window.location.search;
    const userId = searchParams.split('=')[1];
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
    const container = document.getElementById('details');
    const img = document.createElement('img');
    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(data, null, 2)

    container.appendChild(pre)
}

document.addEventListener('DOMContentLoaded', () => {
    call()
})
