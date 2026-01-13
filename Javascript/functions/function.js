function add(){
    console.log('add function is loaded! ')
    return 2+2;
}

console.log('add function is invoked! ')
a=add();
console.log('add function returned:  '+a)

function square(x,y=2){
    console.log('square function is loaded! ')
    
    return x*x,y*y;
}

console.log('square function is invoked! ')
b=square(a);
console.log('square function returned:  '+b)