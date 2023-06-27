// Bind takes a function and a list of arguments as input, and it returns a new function. The new function will have the same body as the original function, but the this keyword will be set to the first argument in the list.


const fullname=function(hello,initial){
    return  hello+' '+ this.firstName+' '+this.lastName+' '+initial
 }
 const obj={    
     firstName:"jamshad",
     lastName:"ali"
 }
 const display=fullname.apply(obj,['Hellko','j'])
 console.log(display);
 