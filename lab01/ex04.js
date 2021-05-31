// Ex 04
array = [];
for (var i = 0; i < 101; i++) {
 array[i] = i;
}

// Lambda function
var evenVec = array.filter(elem => elem % 2 == 0);

console.log(evenVec);

// Ex 05
function giveElem(array, idx, showFunc) {
    showFunc(array, idx);
}

function getElem(array, idx) {
    console.log(array[idx]);
}

giveElem(evenVec, 20, getElem);