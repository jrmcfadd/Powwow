var myObj = [
    {name: "item1", isExpired: false},
    {name: "item2", isExpired: true},
    {name: "item3", isExpired: true},
    {name: "item4", isExpired: false},
    {name: "item5", isExpired: false}
];
console.log(myObj.sort(
    function(a, b){
        return a.isExpired - b.isExpired; })
);

// var newObjt = [];
// var newObjf = [];
// var i = 0;
// while (i < myObj.length){
//     if (myObj[i].isExpired === true){
//         newObjt[i] = myObj[i];
//         i++
//     }
//     else{
//         newObjf[i] = myObj[i];
//         i++
//     }
//
// }
// var newobj =  newObjf.concat(newObjt);
