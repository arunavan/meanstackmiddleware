var global_num = 12          //global variable 
class Numbers { 
   num_val:Number = 13;            //class variable 
   static sval = 10;         //static field 
   
   storeNum()  { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
gloabal_num=20
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 
