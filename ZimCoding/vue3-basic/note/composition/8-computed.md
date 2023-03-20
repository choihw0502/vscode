# Computed 
템플릿 문법({{ }})은 간단히 사용 하면 매우 편리합니다. 하지만 템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수가 어려워질 수 있습니다. 예를 들어 아래와 같이 객체가 있는경우:
그리고 <template> 에 author가 책을 갖고 있는지 없는지 여부를 표시하고 싶습니다.
이 시점에서 템플릿 표현식은 복잡해지며 선언적이지 않습니다. 또 이러한 코드를 여러곳에서 반복적으로 사용해야 한다면 더더욱 비효율 적일 것입니다.
이럴때 사용하는 것이 계산된 속성(computed property)입니다. 

## Computed vs Method
아래와 같이 메서드를 활용하면 computed와 동일한 효과를 얻을 수 있습니다.
이렇게 computed와 메서드는 동일한 결과를 얻을 수 있습니다. 하지만 차이점은 computed는 결과가 캐시된다는 것입니다. 그리고 computed 내 반응형 데이터가 변경된 경우에만 다시 계산됩니다.
### Computed는 캐쉬됨
### Method는 파라미터가 올 수 있음
### 컴포넌트 랜더링시 computed는 비용이 적게듬
#### 관련 https://v2.ko.vuejs.org/v2/guide/comparison.html

## Writable Computed
Computed는 기본적으로 getter전용입니다. 계산된 속성에 새 값을 할당하려고 하면 런타임 경고가 표시됩니다.  새로운 계산된 속성이 필요한 경우에 getter와 setter를 모두 제공하여 속성을 만들 수 있습니다.