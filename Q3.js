function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var myObj = [
    "animals.dogs.poddle",
    "animals.cats.tabby",
    "animals.cats.siamese",
    "animals.dogs.labrador",
    "animals.dogs.hound",
    "plants.trees",
    "animals.birds.parrot.grey"
];

var input = "bird";

var i = 0;
var pos = 0;
var answer = [];

myObj = myObj.sort();

while (i < myObj.length){
    let flag = myObj[pos].includes(input);
    if (flag === true){
        answer.push(myObj[pos]);
    }
    i++;
    pos++;
}
console.log(answer);