// alert("I work yay!")

// const promise = $.ajax({
//     url:'https://www.omdbapi.com/?apikey=3b6a1a6d&'
// });

// promise.then(
//   (data) => {
//    console.log(data);
//   },
//   (error) => {
//    console.log('bad request: ', error);
//   }
// );

// console.log("http://www.omdbapi.com/?apikey=3b6a1a6d&t=superbad")


// /////////////////////////
// // PIECES OF THE API URL
// /////////////////////////
// http://www.omdbapi.com/?apikey=[yourkey]&

// // URL  = http://www.omdbapi.com/
// // ? = query seacrh parametet
// // apikey = identifier
// // =  assignment operator 
// // [yourkey] = the value
// // & = what separates our variables in our search

// Ways to request data via our API and JS

// 1. jQuery's AJAX method $.ajax()
// 2. The Browser's Fetch (look into on your own time)
// 3. JSON HTTP Client (Axios, for example) = installed

// const promise = $.ajax({
//     url: 'https://www.omdbapi.com/?apikey=3b6a1a6d&t=titan'
// });

// promise.then(
//     (data) => {
//         console.log(data)
//     },
//     (error) => {
//         console.log('bad request: ', error)
//     }
// )

// console.log($.ajax('https://www.omdbapi.com/?apikey=3b6a1a6d&t=titan'))



// storing the url as a variable saves us a lot of time later

////// VARIABLES ////////

const URL = 'https://www.omdbapi.com/?apikey=3b6a1a6d&t='

////// CACHED ELEMENTS / ELEMENTS REFERENCED ////////

const $title = $('#title')
const $year = $('#year')
const $rated = $('#rated')
const $form = $('form')
const $input = $('input[type="text"]')

////// EVENT LISTENERS ///////

$form.on("submit" , handleGetData )

    



////// FUNCTION ///////

function handleGetData (event) {
    let userInput = $input.val()

    event.preventDefault()
    $.ajax(URL + userInput).then(function(data){
        console.log('movie is ready')
        console.log(data)
        $title.text(data.Title)
        $year.text(data.Year)
        $rated.text(data.Rated)
        $('main').append(`<img src="${data.Poster}" alt="${data.Title}"/>`)
    },function(error){
        console.log('we broke it!')
    })
    
}


