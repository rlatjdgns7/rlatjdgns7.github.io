
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let input = [];
rl.on('line', function (line) {
     if(line===""){
         rl.close();
     }
     input.push(line)    
})
.on('close', function () {
    const x = input[0];
    const y = input[1];
    if(0 < y - 45){
        console.log(`${x} ${y - 45}`)
    }else console.log(`${x - 1} ${y+60-45}`)
  
      
      process.exit();
    })