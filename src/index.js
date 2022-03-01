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
            button.id = "comments"
            button.innerText = "Comment"
            li.append(a)
            ul.append(li)
            ul.append(button)
            button.addEventListener('click', displayComment)

            // console.log(button)

})

    
    });

};


function displayComment(){




}


commentForm = document.getElementById('commentForm')

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert("Thanks for commenting!")
    console.log("Comment has been submitted!");
    commentForm.reset();
})





// add class = "container" to ul 
// use event.target in the callback 



// Objective


//click on the a tag title name, use an click event listener that uses a callback function which displays an img of the meme 

// what do i need to do in order to make this work?

//event listener 
//add the correct url link to each a tag 
// find a way to make img show on tag with url link



//Event Listener on change
// select dropdown categorizing by letters
// A-Z

//create select tag in html
// create event listener to grab select tag 
// query selector for it 









// let h2 = document.createElement('h2')
// h2.innerText = "Leave Us a Comment"
// let form = document.createElement('form')
// let textarea = document.createElement('textarea')
// textarea.placeholder = "Add Your Comment"
// div.class = "button"
// form.append(textarea)
// form.append(div)
// console.log(commentBox)

// let input = document.createElement('input')
// input.type = "submit"
// input.value = "Comment"
// div.appendChild(input)

// let button = document.createElement('button')
// button.innerText = "Cancel"
// div.appendChild(button)
