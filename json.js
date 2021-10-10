function loadPost(data)
{
    let postsDiv = document.getElementById('posts')
    let n = 0
    for (let i of data)
    {
        let createdDiv = document.createElement('div')
        createdDiv.innerHTML = `
        <h1>${i.title}</h1>
        <p>${i.body}</p>`;
        createdDiv.classList.add('post')
        postsDiv.appendChild(createdDiv)
        n++
    }
    console.log(n)
}



fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => loadPost(data));
