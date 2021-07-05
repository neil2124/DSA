const fruits = ['apple','mango','banana','guava','leeche'];
for (let fruit in fruits) {
    console.log(fruits[fruit]);
}

const people = {
    "Neil":[{Age:20,Hobby:"Reading"},{djs:"hsjfd",jdj:"jdb"}],
    "Nigel":[{Age:17,Hobby:"Online Gaming"}]
}

for (let person in people){
    for (let i =0;i<people[person].length;i++){

        console.log(people[person][i]);
    }
}


// Maps are different then objects
let map = new Map();
map.set("A",{node:"B",weight:6})
console.log(map)
console.log(map.get("A"));

