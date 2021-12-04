var x = 1;

function outer(){
    var x = 2;

    function inner(){
        console.log(x);
    }

    inner();
}


function print(){
    console.log('print:');
    console.log(x);
}

function dummy(){
    var x = 999;
    print();
}


function closure1(z){
    var y = 2;
    return function inner(){
        console.log(`${x},${y},${z}`);
    }
}


var c = closure1(3);
c();
