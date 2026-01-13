let product=(a,b=3)=>{
    console.log('running')
    return a*b;
}

a=3;
b=product(a);
console.log(b)