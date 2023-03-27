import { ref, onMounted, onUnmounted } from 'vue'

//Composable 함수명은 'use'로 시작하는게 규칙
export function useMouse() {
  //Composable에 의해 캡슐화되고 관리되는 상태
  const x = ref(0)
  const y = ref(0)

  /*   
  //상태를 업데이트
  function update(event) => {
    x.value = event.pageX
    y.value = event.pageY
  }
 */
  /* 
//Composable은 사용중인 컴포넌트 hook또한 사용할 수 있다.
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
 */
  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  // 관리 상태를 반환함
  // 상태값은 ref 이며 만약 외부에서 해당값을 변경하면 내부의 값도 동기화되어 변경됨
  return { x, y }
}

// 특정 DOM에 이벤트를 등록하는 기능도 Composable 함수로 만들 수 있습니다.
export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
