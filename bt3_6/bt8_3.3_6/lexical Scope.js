var myFunction = function (){
    var name = 'Ha Thi';
    var myOtherFunction = function(){
        console.log('I am ' + name);

    };
    console.log(name);
    myOtherFunction();
};
myFunction();