<template>
  <div class="bg-yellow">
    <q-page class="flex flex-center">
      <q-card flat :style="{ minWidth: '400px' }">
        <q-card-section>
          <div class="text-h6 text-weight-bold">😘 회원 가입 👍</div>
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
              <q-input
                label="나이"
                suffix="만"
                prefix="나이"
                input-class="text-right"
                hint="영문 대/소문자 포함 8자 이상"
                v-model="inputId"
                filled
              ></q-input>
              <q-input
                label="card"
                v-model="inputId"
                filled
                mask="AAAA - #### - #### - SSS"
                hint="Mask: AAAA - #### - #### - SSS"
              ></q-input>
              <q-btn
                class="full-width q-mt-lg"
                unelevated
                color="primary"
                size="lg"
                label="가입하기"
              ></q-btn>
              <q-btn
                class="full-width q-mt-x5"
                label="로그인"
                to="/login/in"
              ></q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>
<script>
export default {
  name: 'signIn',
};
</script>
<script setup></script>

<style lang="scss" scoped></style>
