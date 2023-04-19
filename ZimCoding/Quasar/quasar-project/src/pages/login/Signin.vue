<template>
  <div class="row window-height">
    <div class="col" :class="screenWidth">
      <q-img height="100vh" src="/sample.jpg"> </q-img>
    </div>

    <div class="col flex flex-center">
      <q-card flat :style="{ minWidth: '400px' }">
        <q-card-section>
          <div class="text-h6 text-weight-bold">로그인 하기</div>
          <div class="text-subtitle2 text-grey">👍</div>
        </q-card-section>
        <q-card-section>
          <q-form @keyup="login">
            <div class="q-gutter-y-lg">
              <q-select
                filled
                v-model="language"
                :options="languageList"
                label="Filled"
              />
              <q-input
                hint="E-mail or id 입력"
                v-model="inputId"
                label="ID"
                filled
              ></q-input>
              <q-input
                type="password"
                label="PW"
                hint="영문 대/소문자 포함 8자 이상"
                v-model="inputPw"
                filled
              ></q-input>
              <q-checkbox
                class="full-width q-mt-xs"
                toggle
                v-model="saveId"
                label="Save ID"
              />
              <q-btn
                class="full-width q-mt-md"
                unelevated
                color="primary"
                size="lg"
                label="로그인"
                @click="login"
              ></q-btn>
              <q-btn
                class="full-width q-mt-md"
                label="회원가입"
                to="/login/up"
              ></q-btn>
              <q-btn
                class="full-width q-mt-x5"
                label="대시보드 이동"
                to="/"
              ></q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'signIn',
};
</script>
<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const language = ref(window.navigator.language);
const inputId = ref('take');
const inputPw = ref('1234');
const saveId = ref(false);
const $q = useQuasar();
const router = useRouter();

const conCheck = (a, b, c) => {
  console.log(a, b, c);
  console.log(saveId.value);
};

const screenWidth = computed(() => ({
  hidden: $q.screen.lt.sm,
}));

//API 통신
const { proxy } = getCurrentInstance();

const languageList = proxy.languageList;
console.log(languageList);

const login = e => {
  //로그인 버튼 클릭 및 Enter 키입력시 로그인 Pass
  if ((e.type !== 'click') & (e.type == 'keyup' && e.keyCode !== 13)) return;

  proxy
    .$api({
      method: 'post',
      url: '/auth/login',
      data: { p: inputId.value, c: inputPw.value },
    })
    .then(function (data) {
      for (const [key, value] of Object.entries(data.credentials)) {
        $q.sessionStorage.set(key, value);
      }
      console.log(router);
      router.push('/');
    });
};
</script>

<style lang="scss" scoped></style>
