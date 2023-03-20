/* 
캡쳐링 ( capturing )
    최상위 요소에서 타깃노드까지 전달되는 이벤트
버블링 ( bubbling )
    타깃노드에서 최상위 노드에게 전달되는 이벤트 
*/
const $body = document.querySelector('body')
const $main = document.querySelector('main')
const $div = document.querySelector('div')
const $p = document.querySelector('p')
const $span = document.querySelector('span')
console.log($div)
$span.addEventListener('click', function( event ){
    console.log(event, 'span 태그')
}, true) // 3번째 인자값이 true 일때 capturing 이다
$p.addEventListener('click', function( event ){
    event.stopPropagation(); 
    console.log('p 태그')
}) // 3번째 인자값 default는 false이며 bubbling 이다
$div.addEventListener('click', function( event ){
    // 이벤트 종료
    event.stopPropagation(); 
    console.log('div 태그')
})
$main.addEventListener('click', function( event ){
    //동작에 관련된 실행을 하지않음
    event.preventDefault();
    console.log('main 태그')
})
$body.addEventListener('click', function( event ){
    console.log('body 태그')
})