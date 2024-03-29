# 양방향 바인딩

## v-model
프론트엔드에서 입력 양식을 처리할 때 입력 요소의 상태와 자바스크립트의 상태를 동기화해야 하는 경우가 많습니다. value를 바인딩하고 @input이벤트로 text를 변경하는 것은 번거로울 수 있습니다.
그래서 Vue에서는 이러한 작업은 단순화 하도록 양방향을 바인딩할 수 있는 v-model디렉티브를 제공합니다.

### v-model 수식어(modifiers)
#### .lazy
기본적으로, v-model은 각 input 이벤트 후 입력과 데이터를 동기화 합니다. (단, 앞에서 설명한 IME 구성은 제외됩니다.). lazy 수식어를 추가하여 change 이벤트 이후에 동기화 할 수 있습니다.
#### .number
사용자 입력이 자동으로 number 타입으로 형변환 되기를 원하면,  .number 수식어를 추가하면 됩니다.
#### .trim
사용자가 입력한 내용에서 자동으로 앞뒤 공백을 제거하는 트림처리가 되길 바란다면, v-model이 관리하는 input에 trim 수식어를 추가하면 됩니다.

## HTML 마다의 속성
v-model은 내부적으로 HTML 요소가 어떤 요소냐에 따라 서로 다른 속성(:value)과 이벤트(@input)를 사용합니다.
input type=”text”와 textarea는 value 속성과 input 이벤트를 사용합니다.
checkbox와 radio버튼은 checked 속성과 change 이벤트를 사용합니다.
select 태그는 value 속성과 change 이벤트를 사용합니다.

### textarea
- :value, @input
- v-model
### checkbox
:checked, @change
v-model
하나의 checkbox는 단일 boolean 값을 가집니다.
여러개의 checkbox는 배열을 바인딩할 수 있습니다.
값 바인딩
단일 checkbox 일 때 boolean이 아닌 다른 값을 바인딩 하고 싶다면 true-value, false-value 속성을 사용할 수 있다.

### radio
v-model
### select
v-model