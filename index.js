// Write your solution here!
//is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo","Otis","Garfield"]

//appends a cat to the end of the cats array
function destructivelyAppendCat(name){
    cats.push(name);
}

//destructivelyPrependCat(name)
function destructivelyPrependCat(name){
    cats.unshift(name);
}

// destructivelyRemoveLastCat()
function destructivelyRemoveLastCat() {
    cats.pop();
}

//destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat(){
    cats.shift();
}

//appendCat(name)
function appendCat(name){
    return [...cats,name];
}

//prependCat(name)
function prependCat(name){
    return [name,...cats];
}

removeLastCat()
function removeLastCat(){
    return cats.slice(0,-1);
}

//removeFirstCat()
function removeFirstCat(){
    return cats.slice(1);
}