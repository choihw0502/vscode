/*
this는 함수를 호출하는 방법에 의해 결정된다.
*/
let person = {
    fullname: 'person',
    printThis: function(){
        console.log(this); 
    }
}
//person 객체내에서 실행해서 this는 person이 된다.
person.printThis();
let printThis = person.printThis;
//printThis 객체에서 꺼내와 전역변수에 넣은 상태로 window 객체가 된다.
printThis();

//ES5 bind - this 설정
/*
bind는 같은 타입일때 한번만 가능함
*/
function f_printThis() {
    console.log(this)
}

let person1 = {
    name : "person1"
}
let person2 = {
    name : "person2"
}
let printThis1= printThis.bind(person1)
let printThis2= printThis1.bind(person2)
printThis1();

// 객체 안에 콜백에서 바인딩할때 
let bindding = {
    name : 'bindding',
    fnTest1 : function(){
        console.log("fn_bind",this);
        function inSettime(){
            //this = window
            console.log("fn_bind > setTimeout",this);
        }
        //this 변경하기
        setTimeout(inSettime.bind(this), 100);
    },
    fnTest2 : function(){
        console.log("fn_bind",this);
        setTimeout(() => {
            //this = bindding
            console.log("fn_bind > setTimeout",this);
        }, 100);
    }
}
// ES6화살표 함수(Array Function)과 Stric Mode(function(){})에서의 this는 다르다.
// 따라서 객체안에서 function 타입의 프로토타입을 생성할시 stric mode로 사용해야 객체 자체를 this로 받음
bindding.fnTest1();
bindding.fnTest2();