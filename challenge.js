// function createIterator(object, operator){
//     let symbol = Symbol(operator)
//     const iterator = symbol
//     return function(){
//         return parseInt(object.innerText(symbol))
//     }
// }

function addCounter(){
    return parseInt(counter.innerText++)
}

function decreaseCounter(){
    return parseInt(counter.innerText--)
}

// window.addEventListener(`load`, function(){
// });

let counter = document.getElementById(`counter`);
setInterval(() => parseInt(counter.innerText++) , 1000);

let plus = document.getElementById(`+`);
let minus = document.getElementById(`-`);
let heart = document.getElementById(`<3`);
let pause = document.getElementById(`pause`);
let likes = {}
let likesUl = document.getElementsByClassName(`likes`)[0]

plus.addEventListener("click", addCounter);
minus.addEventListener("click", decreaseCounter);

// plus.addEventListener("click", function(){
//     counter.innerText++
// });

heart.addEventListener("click", function() {
    if (likes[counter.innerText]) {
        likes[counter.innerText]++;
    } else {
        likes[counter.innerText] = 1;
    }
})

(function showLikes(){
    for (let number in likes){
        let li = document.createElement("LI");
        li.innerText = `${number}: ${likes[number]}`;

        likesUl.append(li)
    }
}())

// for(let key in an {})


// likes = {
    // 15: "two",
    // 207: "three hundred"
// }
// likes[counter.innerText]
// counter.innerText = 16
// likes[16] => true .... boo it's false
// 
