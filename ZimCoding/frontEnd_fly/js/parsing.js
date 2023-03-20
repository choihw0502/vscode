console.log("Know the parsing order script reference");

// script 로드 속성 없을시 에러발생
// async, defer 속성은 html 파싱과 함께, 비동기로 script을 읽음
// defer는 파싱완료 후 javascript 코드 실행
// async는 파싱이 완료되지 않았더라도 먼저 로딩되는 script 실행
let btn;//= document.querySelector('#btn');

/*
비동기는 하던작업과 병행해서 동시에 진행됨      (병렬)
동기는 하던 작업을 기다렸다가 다음작업을 진행됨 (직렬)
동기( Synchronous ) - 답변을 기다리는것 (blocking)
비동기( Asynchronous ) - 답변을 기다리지 않는 것 (non-blocking)
*/

//html파일
window.onload = function(){
    console.log(' Start onload ');
    btn = document.querySelector('#btn');
    //html보다 script 가 먼저 실행되서 id=btn을 찾을수없어서 에러발생
    btn.addEventListener('click', function() {
        alert('button click!');
    })
}
//redey와 같은 이벤트
//dom객체가 생성되고 실행됨
document.addEventListener('DOMContentLoaded', function(){
    console.log(' Start DOMContentLoaded ');
})