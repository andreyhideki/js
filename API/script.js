function clicou(){
    let req = fetch('https://jsonplaceholder.typicode.com/posts');

    req.then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            console.log(data[0]);
        })
        .catch(() => {
            alert("Deu problema!");
        })

}

function insert(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'titulo de teste',
            body: 'corpo de teste',
            userId: 2
        })
    })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json);
        });
}

async function clicouasync(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await res.json();
    console.log(json);
    console.log(json[0]);

    alert("CLICOU!");

}

async function insertasync(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'titulo de teste',
            body: 'corpo de teste',
            userId: 2
        })
    });

    let json = await res.json();

    console.log(json);
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#botaoinsert').addEventListener('click', insert);
document.querySelector('#botaoasync').addEventListener('click', clicouasync);
document.querySelector('#botaoinsertasync').addEventListener('click', insertasync);