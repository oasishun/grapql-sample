let cat = {
    sound: 'meow',
    soundPlay: function() {
        console.log(this);
        setTimeout(function () {
            console.log(this);
            console.log(this.sound);
        }, 10);
    }
}

cat.soundPlay();

let sum = 0
for (let i =0; i < 10000; i++){
    sum = sum + i
}

console.log(sum);




