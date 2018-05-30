const counter = document.getElementById('counter')
const plus = document.getElementById('+')
const minus = document.getElementById('-')
const heart = document.getElementById('<3')
const pause = document.getElementById('pause')
const likes = document.getElementsByClassName('likes')
const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const commentList = document.getElementById('list')
let intervalId = setInterval(increaseCounter, 1000)

function postComment(){
  let comment = commentInput.value
  let li = document.createElement('li')
  li.innerText = comment
  list.append(li)
  commentInput.value = ""
}

function pauseCounter() {
  if (pause.innerText == "pause"){
    pause.innerText = "resume"
    clearInterval(intervalId);
  }
  else if (pause.innerText == "resume") {
    pause.innerText = "pause"
    intervalId = setInterval(increaseCounter, 1000)
  }
}

function likeCount(){
  let numberOfLikes = 1
  let number = counter.innerText
  if (document.getElementById(number)){
      let i = document.getElementById(number)
      let numLikes = i.innerText.split(' ')
      ++numLikes[1]
      i.innerText = `${number}: ${numLikes[1]}`
  } else {
      let li = document.createElement('li')
      li.setAttribute('id', number)
      li.innerText = `${number}: ${numberOfLikes}`
      likes[0].append(li)
  }
}

function increaseCounter(){
  let counterNum = parseInt(counter.innerText)
  counterNum += 1
  counter.innerText = counterNum
}

function decreaseCounter(){
  let counterNum = parseInt(counter.innerText)
  counterNum -= 1
  counter.innerText = counterNum
}

commentForm.addEventListener('submit', (e) => {
  e.preventDefault()
  postComment()
})
plus.addEventListener('click', (e) => {
  if (pause.innerText == "resume"){}
  else{increaseCounter()}
})
minus.addEventListener('click', (e) => {
  if (pause.innerText == "resume"){}
  else{decreaseCounter()}
})
heart.addEventListener('click', (e) => {
  if (pause.innerText == "resume"){}
  else{likeCount()}
})
pause.addEventListener('click', (e) => {
  pauseCounter()
})

///////////// ^^ COMPLETED ^^ (5/30/18) ///////////////////

////////// ORIGINAL CODE WITH MIKE ////////////////////////

// // function createIterator(object, operator){
// //     let symbol = Symbol(operator)
// //     const iterator = symbol
// //     return function(){
// //         return parseInt(object.innerText(symbol))
// //     }
// // }
//
// function addCounter(){
//     return parseInt(counter.innerText++)
// }
//
// function decreaseCounter(){
//     return parseInt(counter.innerText--)
// }
//
// // window.addEventListener(`load`, function(){
// // });
//
// let counter = document.getElementById(`counter`);
// setInterval(() => parseInt(counter.innerText++) , 1000);
//
// let plus = document.getElementById(`+`);
// let minus = document.getElementById(`-`);
// let heart = document.getElementById(`<3`);
// let pause = document.getElementById(`pause`);
// let likes = {}
// let likesUl = document.getElementsByClassName(`likes`)[0]
//
// plus.addEventListener("click", addCounter);
// minus.addEventListener("click", decreaseCounter);
//
// // plus.addEventListener("click", function(){
// //     counter.innerText++
// // });
//
// heart.addEventListener("click", function() {
//     if (likes[counter.innerText]) {
//         likes[counter.innerText]++;
//     } else {
//         likes[counter.innerText] = 1;
//     }
// })
//
// (function showLikes(){
//     for (let number in likes){
//         let li = document.createElement("LI");
//         li.innerText = `${number}: ${likes[number]}`;
//
//         likesUl.append(li)
//     }
// }())
//
// // for(let key in an {})
//
//
// // likes = {
//     // 15: "two",
//     // 207: "three hundred"
// // }
// // likes[counter.innerText]
// // counter.innerText = 16
// // likes[16] => true .... boo it's false
// //


// function createIterator(object, operator){
//     let symbol = Symbol(operator)
//     const iterator = symbol
//     return function(){
//         return parseInt(object.innerText(symbol))
//     }
// }

      // // SOLUTION WITH MIKE
      // ////////////////////////////////////
      // function addCounter(){
      //     return parseInt(counter.innerText++)
      // }
      //
      // function decreaseCounter(){
      //     return parseInt(counter.innerText--)
      // }
      //
      // // window.addEventListener(`load`, function(){
      // // });
      //
      // let counter = document.getElementById(`counter`);
      // setInterval(() => parseInt(counter.innerText++) , 1000);
      //
      // let plus = document.getElementById(`+`);
      // let minus = document.getElementById(`-`);
      // let heart = document.getElementById(`<3`);
      // let pause = document.getElementById(`pause`);
      // let likes = {}
      // let likesUl = document.getElementsByClassName(`likes`)[0]
      //
      // plus.addEventListener("click", addCounter);
      // minus.addEventListener("click", decreaseCounter);
      //
      // // plus.addEventListener("click", function(){
      // //     counter.innerText++
      // // });
      //
      // heart.addEventListener("click", function() {
      //     if (likes[counter.innerText]) {
      //         likes[counter.innerText]++;
      //     } else {
      //         likes[counter.innerText] = 1;
      //     }
      // })
      //
      // (function showLikes(){
      //     for (let number in likes){
      //         let li = document.createElement("LI");
      //         li.innerText = `${number}: ${likes[number]}`;
      //
      //         likesUl.append(li)
      //     }
      // }())
      // /////////////////////////////////////

// for(let key in an {})


// likes = {
    // 15: "two",
    // 207: "three hundred"
// }
// likes[counter.innerText]
// counter.innerText = 16
// likes[16] => true .... boo it's false
//
