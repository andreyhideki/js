// https://jsonplaceholder.typicode.com/posts

async function readPosts(){
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando.....';

    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();

    if (data.length > 0) {
        postArea.innerHTML = '';

        for (let i in data) {
            let postHtml = `<div><h1>${data[i].title}</h1>${data[i].body}<hr/></div>`;
            postArea.innerHTML += postHtml;
        }
    } else {
        postArea.innerHTML = 'Nenhum post';
    }
}

function clearInputs() {
    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

}

async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 2
            })
        }
    );

    clearInputs();
    readPosts();
}


document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if (title && body) {
        addNewPost(title, body);
    } else {
        alert("Preencha os campos.")
    }

})

readPosts();