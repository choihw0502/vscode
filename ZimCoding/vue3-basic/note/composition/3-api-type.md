# Options API VS CompositionAPI
Options API는 data, methods, mounted 와 같은 옵션을 사용합니다.
Composition API는 반응형 코드를 작성하는 단일 setup 함수가 있습니다.

## Composition API란?
Composition API는 옵션(data, methods, ...)을 선언하는 대신 가져온 함수(ref, onMounted, ...)를 사용하여 Vue 컴포넌트를 작성할 수 있는 API 세트를 말합니다

## Composition API 등장배경
Options API 코드를 보면 동일한 논리적 관심사(book, counter)를 처리하는 코드가 파일의 다른 부분에 분산되어 있어 코드를 분석하기가 매우 힘듭니다. 만약 코드가 더 복합하고 길어질 경우 파일을 위아래로 스크롤해야 하기 때문에 더 이해하기 힘든 상황이 옵니다.

Composition API를 사용하면 동일한 논리적 관심사 코드가 그룹화 되어 코드를 분석하기도 쉽고 유지보수가 용이해집니다. 또한 논리적 관심사 코드어 외부 유틸 파일로 추출하기가 쉽습니다.

Composition API의 가장 큰 장점은 Composable 함수의 형태로 로직의 재사용이 가능하다는 것입니다. Options API의 기본 로직 재사용 메커니즘인 Mixins의 모든 단점을 해결합니다.

### Options API가 deprecated 될 예정인가요?
아니요, 그렇게 할 계획이 없습니다. Options API는 Vue의 필수적인 부분이며 많은 개발자들이 Vue를 좋아하는 이유입니다. 또한 합성 API의 많은 이점은 대규모 프로젝트에서만 나타나고 옵션 API는 복잡도가 낮거나 중간인 많은 시나리오에 대한 확실한 선택으로 남아 있습니다.