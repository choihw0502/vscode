# Composition API
Composition API는 옵션(data, methos, ...)을 선언하는 대신 가져온 함수(ref, onMounted, ...)를 사용하여 Vue 컴포넌트를 작성할 수 있는 API 세트를 말합니다.
다음은 Composition API에서 각각의 API(ref, onMounted, ...)들을 포괄하는 용어 입니다.

## 반응형 API (Reactivity API)

예를 들어 ref(), reactive()와 같은 API를 사용하여 reactive state(반응 상태), computed state(계산된 상태), watchers(감시자)와 같은 것들을 만들 수 있습니다. 

## 라이프 사이클 훅 (Lifecycle Hooks)

예를 들어 onMounted(), onUnmounted()와 같은 API를 사용하여 프로그래밍 방식으로 컴포넌트 라이프사이클에 접근할 수 있습니다.
쉽게 말해서 라이프사이클 특정 시점에 이러한 함수로 코드를 삽입할 수 있습니다.

## 종속성 주입 (Dependency Injection)

예를 들어 provide()와 inject()는 Reactivity API를 사용하는 동안 Vue의 의존성 주입 시스템을 활용할 수 있게 해줍니다.