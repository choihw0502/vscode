import {numbers, fluits, students} from './sample.js'

/* map
Array 안에 요소를 새로운 Array로 재가공하여 return
*/
const resultMap = numbers.map(function(number){
    return number * 2
})
console.log(resultMap)

console.log(
    "영어점수", 
    students.map( student => student.english)
)
/* some
Array안에 요소를 Boolean형태로 반환
true를 찾으면 break한다.
 */
console.log(
    "some Test > 과일 중에 배가 있나요?",
    fluits.some( fluit => fluit === "배")
)

/* every
Array안에 주어진 판별 함수를 통과하는지 테스트
*/
console.log(
    "every Test > ",
    numbers.every( number => number < 8 )
)

/* filter
array에서 주어진 함수의 테스트를 통과하는 모든요소를 모아 새로운 배열로 반환 */
console.log(
    "filter test >",
    numbers.filter( number => number % 2 === 0 )
)

/* reduce
배열의 각 요송에 대해 주어진 reduce 함수를 실행하고, 하나의 결과값을 반환 
누적값(acc), 현재값(cur), 현재인덱스(idx), 원본배열(src) 의 매개변수를 갖는 함수
*/
console.log(
    "reduce test > ",
    fluits.reduce( (acc, cur, idx, src) => {
        console.log(acc, cur, idx, src);
        if( acc.includes(cur) === false) acc.push(cur);
        return acc;
    }, []) //<=초기의 값
)