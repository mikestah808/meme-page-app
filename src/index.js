const BASE_URL = 'https://api.imgflip.com';

window.addEventListener('DOMContentLoaded', () => {
    getMemes();
})


function getMemes(){
    const ul = document.getElementById('memes');
    fetch(BASE_URL + '/get_memes')
    .then(res => res.json())
    .then(data => {

        data.data.memes.forEach(meme => {

            let li = document.createElement('li')
            let a = document.createElement('a')
            
            a.innerText = meme.name
            a.href = meme.url
            let button = document.createElement('button')
            button.id = "like-button"
            let span = document.createElement('span')
            span.innerText = 'Like ♥'
            button.append(span)
            button.addEventListener('click', likeButton)
            li.append(a)
            ul.append(li)
            ul.append(button)
            

})

    
    });

};


function likeButton(event){
    console.log(event)
    event.target.classList.toggle('red-heart')
    console.log("I've been clicked!");



}


commentForm = document.getElementById('commentForm')

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert("Thanks for commenting!")
    console.log("Comment has been submitted!");
    commentForm.reset();
})






