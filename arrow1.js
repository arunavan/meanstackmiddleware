var func = (x)=> { 
    if(typeof x=="number") { 
       console.log(x+" is numeric") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(12) 
 func("Tom")

 var display = x=> { 
    console.log("The function got "+x) 
 } 
 display(12)
 var disp = () => {
     console.log("arraow function")
 }
 disp();
 