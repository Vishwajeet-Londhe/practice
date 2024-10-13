// var b = [1,2,3];
// var d = b;
// d.pop();

// var b=[1,2,3];
// var d=[...b];

// d.pop();

// var a= {name:"a", type:"pastic"};
// var b={...a};
// b.name="b";

// var a=12;
// var b=13;
// var c=a+b;
// var d=a-b;
// var e=a/b;
// var f=a*b;
// var g=a%b;

// for(var i=0; i<12; i++){
//     console.log(i);
// }

var arr = [1, 2, 3, 4];

// arr.forEach(function(value, index){
//     console.log(value+2, index);
// });

// var obj={name:"vishwajeet",age:25}

// for(var value in obj){
//     console.log(value,obj[value]);
// }

// ASYNC

// function getsongs(){
//     setTimeout(function(){
//         console.log("songs aa gaye")
//     })
// }

// getsongs();

gsap.from("h1", {
    opacity: 0,
    y: 50,
    delay: 0.5,
    duration: 1,
    onStart: function () {
        $("h1").textillate({ in: { effect: "fadeIn" } });
    },
});
