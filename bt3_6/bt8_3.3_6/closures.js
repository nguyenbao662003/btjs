function outerF(){
    var x = "world";
    function innerFsetX(val){
        x = val;
    }
    return innerFsetX;
}

var a = outerF();
a("Hello");
