const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (a, b) => {
const c1 = toString(input);
const c2 = c1.split("\n").map( (item) =>
parseInt(item))
if(c1[0] > c1[1]) {
    console.log(">");
}else if(c1[0] < c1[1]){
    console.log("<")
}else {
    console.log('===')
}

   
}


const input = [];// This will save the var
rl.on("line", function(line) {     // this is going to be got a var line
   input.push(line) // this gonna be infinitely got a data for oneline and 
}).on("close", function() {
    solution(input[0]); // this will opertate code what i want 
    process.exit();
});
