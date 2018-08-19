function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var myObj = [
    "animals.dogs.poodle",
    "animals.cats.tabby",
    "animals.cats.siamese",
    "animals.dogs.labrador",
    "animals.dogs.hound",
    "plants.trees"
];

myObj = myObj.sort();

var newobj = [];
var i = 0;
var pos = 0;
var sep = "\t";
var resets = [];
var count = 1;

while (i < myObj.length){
    resets.push(myObj[i].split(".")[0]);
    newobj = newobj.concat(myObj[i].split("."));
    i++;
}

resets = resets.filter( onlyUnique );

newobj.forEach(item => {
    newobj[pos] = item;
    pos++;
});

i = 1;

while(i < newobj.length){
    if(resets.includes(newobj[i])){
        count = 1;
        i++;
    }
    else{
        newobj[i] = sep.repeat(count) + newobj[i];
        count++;
        i++;
    }
}

finalobj = new Set(newobj);
finalobj = Array.from(finalobj);
finalobj.unshift('Root');

for (var x in finalobj){
    if(x <= 0){
        console.log(finalobj[x]);
    }
    else{
        console.log(sep + finalobj[x]);
    }
}