var myObj = [
    {name: "item1", isExpired: false},
    {name: "item2", isExpired: true},
    {name: "item3", isExpired: true},
    {name: "item4", isExpired: false},
    {name: "item5", isExpired: false}
];
var newObjt = [];
var newObjf = [];
var i = 0;
while ( i < myObj.length){
    if (myObj[i].isExpired === true){
        newObjt[i] = myObj[i];
        i++
    }
    else{
        newObjf[i] = myObj[i];
        i++
    }

}
var newobj =  newObjf.concat(newObjt);
console.log(newobj.filter(function(e){return e}));