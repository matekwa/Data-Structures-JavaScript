let letters = [];

let word = "racecar";
let rword = "";

for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(rword === word){
    console.log(word + " is a palindrone");
}else{
    console.log(word + " is not a palindrone");
}