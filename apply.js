// Apply is similar to call, but it takes an array of arguments as input. The this keyword in the function call will be set to the first element in the array.


const fullname=function(hello,initial){
    return  hello+' '+ this.firstName+' '+this.lastName+' '+initial
 }
 const obj={    
     firstName:"jamshad",
     lastName:"ali"
 }
 const display=fullname.apply(obj,['Hello','j'])
 console.log(display);
 