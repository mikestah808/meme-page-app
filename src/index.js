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
            button.innerText = "Comment"
            li.append(a)
            ul.append(li)
            ul.append(button)
            button.addEventListener('click', doSomething)

})

    
    });

};


function doSomething(){
    // console.log('hi');
     // console.log(option)
    let select = document.createElement('select')
    select.name = "meme-alphabet"
    select.id = "memes"
    console.log(select.id)
    let option = document.createElement('option')
    let option2 = document.createElement('option')
    let option3 = document.createElement('option')

    option.value = "A-I"
    option2.value = "J-Q"
    option3.value = "R-Z"

    option.innerText = "A-I"
    option2.innerText = "J-Q"
    option3.innerText = "R-Z"


    select.append(option)
    select.append(option2)
    select.append(option3)

    console.log(select);
}




// add class = "container" to ul 
// use event.target in the callback 



// Objective


//click on the a tag title name, use an click event listener that uses a callback function which displays an img of the meme 

// what do i need to do in order to make this work?

//event listener 
//add the correct url link to each a tag 
// find a way to make img sho on tag with url link



//Event Listener on change
// select dropdown categorizing by letters
// A-Z

//create select tag in html
// create event listener to grab select tag 
// query selector for it 














// data.data.memes.forEach(meme => {

//     ul.innerHTML += `
//     <li><a href = ${meme.url}>${meme.name}</a></li>
//     <button id="comment-button">Comment</button>
//     `

// })





// let li = document.createElement('li')
// let a = document.createElement('a')
// a.innerText = meme.name
// a.href = meme.url
// let button = document.createElement('button')
// button.innerText = "Comment"
// li.append(a)
// ul.append(li)
// button.addEventListener('click', doSomething)







// what do i want function doSomething to peform? 

//