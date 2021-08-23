let paraMeter = 5;


for(let i = 0; i < paraMeter ; i++){
     var star = ''; 
   for(let j = paraMeter -1 ; j >= 0; j--){
       star += j <= i 
       ? "*" 
       : " ";
    
     
   } 
   console.log(star);
   
};

