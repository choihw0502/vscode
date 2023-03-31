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
          <q-form>
            <div class="q-gutter-y-lg">
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
                v-model="inputId"
                filled
              ></q-input>
              <q-btn
                class="full-width q-mt-lg"
                unelevated
                color="primary"
                size="lg"
                label="로그인"
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
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const screenWidth = computed(() => ({
  hidden: $q.screen.lt.sm,
}));
</script>

<style lang="scss" scoped></style>
