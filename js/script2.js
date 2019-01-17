// document.querySelector('#start').addEventListener('click', function () {
//     document.querySelector('#start').innerHTML = 'ストップ';
//     document.querySelector('body').classList.add('top');
// });


let personAry = [];

for (let j = 1; j <= 50; j++) {
    personAry.push(j);
}

const shuffleArray = function () {
    for (var i = personAry.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = personAry[i];
        personAry[i] = personAry[r];
        personAry[r] = tmp;
    }
};
shuffleArray();

console.log(personAry);


// document.querySelector('#start').addEventListener('click', function () {
//     var value = $('select').val();
//     if (value == 'LAB') {
//         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
//             28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
//         ];

const updateTable = function () {
    let div = '';


};

personAry.forEach(function (data, i) {
    const randomNumber = Math.ceil(Math.random() * (numbers.length - 1));
    if ((i + 1) % 6 == 0) {
        div += '<div class="seat">' + numbers[randomNumber] + '</div></div>';
        numbers.splice(randomNumber, 1);
    } else if ((i + 1) % 6 == 1) {
        div += '<div class="table-item text-center"><div class="seat">' + numbers[randomNumber] + '</div>';
        numbers.splice(randomNumber, 1);
    } else {
        div += '<div class="seat">' + numbers[randomNumber] + '</div>';
        numbers.splice(randomNumber, 1);
    }
});
document.querySelector('#app').innerHTML = div;
};

        // for (let i = 1; i <= 40; i++) {


        // }



    // } else if (value == 'DEV') {
    //     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    //         28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
    //     ];
    //     let div = '';

    //     for (let i = 1; i <= 50; i++) {
    //         const randomNumber = Math.ceil(Math.random() * (numbers.length - 1));
    //         if (i % 6 == 0) {
    //             div += '<div class="seat">' + numbers[randomNumber] + '</div></div>';
    //             numbers.splice(randomNumber, 1);
    //         } else if (i % 6 == 1) {
    //             div += '<div class="table-item text-center"><div class="seat">' + numbers[randomNumber] + '</div>';
    //             numbers.splice(randomNumber, 1);
    //         } else {
    //             div += '<div class="seat">' + numbers[randomNumber] + '</div>';
    //             numbers.splice(randomNumber, 1);
    //         }

    //     }

    //     document.querySelector('#app').innerHTML = div;
    // }
// });