/* module
ES6에 도입된 시스템으로 script 파일 각각의 scope을 같는다
다른 스크립트 파일의 같은 변수가있을시 마지막에 읽은 변수만 출력이되는걸 막기위해
각각의 스크립트파일을 참조할 때 같은 name이라도 다르게 읽을 수있다.

가져올때  import 
내보낼때  export

장점
- 유지보수용이 - 기능들이 모듈화가 잘 되어 있는 경우, 의존성을 줄일 수 있기 때문에 기능을 개선이나 수정이 용이하다.
- 네임스페이스화 - 코드의 양이 많아질수록 전역스코프에 존재하는 변수명이 겹치는 경우가 존재합니다. 이때 모듈로 분리하면 모듈만으 ㅣ네임스페이스를 갖기 때문에 그 문제를 해결할 수있다.
- 재사용성 - 같은 코드를 반복하지 않고 모듈로 분리시켜서 필요할 때마다 재활용할 수 있다.

모듈시스템 종류
AMD = 가장 오래된 모듈 시스템 중 하나로 require.js라는 라이브러리를 통해 처음 개발되었다.
CommonJS = NodeJS 환경을 위해 만들어진 모듈 시스템
UMD - AMD와 CommonJS와 같은 다양한 모듈 시스템을 함께 사용하기 위해 만들어졌다.
ES Module - ES6에 도입된 자바스크립트 모듈 시스템
*/
 import * as sample from './sample.js'

 console.log(sample.numbers);

 const subtract = (num1, num2) => {
    return num1 - num2;
}
// 기본값으로 설정된 namming
export default subtract;