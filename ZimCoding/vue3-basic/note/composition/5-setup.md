# setup 함수
setup() 함수(hook)는 Composition API 사용을 위한 진입점 역할을 합니다.
그리고 setup 함수는 컴포넌트 인스턴스가 생성되기 전에 실행됩니다.

## 기본사용
반응형 API(Reactivity API)를 사용하여 반응형 상태를 선언하고 setup()에서 객체를 반환하여 <template>에 노출할 수 있습니다. 반환된 객체의 속성은 구성 요소 인스턴스에서도 사용할 수 있습니다

## Props 접근
setup 함수의 첫 번째 매개변수는 props 입니다. props는 반응형 객체입니다.
props 객체를 구조 분해 할당을 하면 반응성을 잃게 됩니다. 따라서 항상 props.xxx 형식으로 props에 액세스하는 것이 좋습니다.
toRef, toRefs
만약 props의 반응성을 유지하면서 구조 분해 할당을 해야 한다면(예: 외부 함수에 prop을 전달해야 하는 경우) toRefs() 및 toRef() 유틸리티 API를 사용하여 이를 수행할 수 있습니다.

## Setup Context
setup 함수에 전달된 두 번째 매개변수는 Setup Context 객체입니다. 컨텍스트 객체는 setup 함수내에서 유용하게 사용할 수 있는 속성을 갖고 있습니다.
컨텍스트 객체는 반응형이 아니며 안전하게 구조 분해 할당을 할 수 있습니다.
attrs, slots
attrs와  slots은 컴포넌트 자체가 업데이트될 때 항상 업데이트되는 상태 저장 객체입니다. 이러한 것들은 구조 분해 할당을 피해야 하며 항상 속성을 attrs.x 또는 slot.x로 접근해야 한다는 것을 의미합니다. 또한 props와 달리 attrs과 slots의 속성은 반응형이지 않습니다. attrs 또는 slots 변경에 따라 다른 작업을 하려고 하는 경우 onBeforeUpdate 라이프사이클 훅 내에서 수행할 수 있습니다.

## 공공 자산 노출
expose은 template refs(템플릿 참조)를 통해 상위 컴포넌트에서 컴포넌트의 인스턴스에 접근할 때 노출되는 속성을 명시적으로 제한하는 데 사용할 수 있는 함수입니다.

## Render 함수 사용
setup은 동일한 범위에서 선언된 반응형 상태를 직접 사용할 수 있는 render function 를 반환할 수도 있습니다.
render function을 반환하면 다른 것을 반환할 수 없습니다. 내부적으로는 문제가 되지 않지만 template refs(템플릿 참조)를 통해 이 컴포넌트의 메서드를 상위 컴포넌트에 노출하려는 경우 문제가 될 수 있습니다.
이때 expose()를 호출하여 이 문제를 해결할 수 있습니다.
그러면 template refs(템플릿 참조)를 통해 상위 컴포넌트에서 increment 메서드를 사용할 수 있습니다.