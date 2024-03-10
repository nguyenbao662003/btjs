function fOuter(){
    var x = "Hello";
    function fInner(){
        x = "world";
    }
    fInner();
    return x;
}
console.log(fOuter());//world
