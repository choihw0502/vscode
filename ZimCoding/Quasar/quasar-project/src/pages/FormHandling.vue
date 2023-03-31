<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">check</div>
      <q-separator class="q-my-md"></q-separator>
      <div>Form Handling</div>
      <q-form
        ref="myFrom"
        class="q-gutter-sm q-mt-lg"
        greedy
        autofocus
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          outline
          filled
          v-model="form.title"
          label="제목"
          :rules="[val => !!val || '필수 항목입니다']"
        >
        </q-input>
        <q-input
          v-model="form.content"
          autogrow
          filled
          type="textarea"
          :rules="[
            val => !!val || '필수 항목입니다',
            val => val.length <= 50 || '최대 50자 이내로 입력하세요',
          ]"
          counter
          lazy-rules
        />
        <q-select
          color="orange"
          filled
          v-model="form.model"
          :options="options"
          label="태그"
          emit-value
          multiple
          :rules="[
            val => !!val.length > 0 || '필수 항목입니다',
            val => val.length <= 2 || '최대 2개까지 선택가능합니다.',
          ]"
        >
          <template v-if="form.model" v-slot:append>
            <q-icon
              name="cancel"
              @click.stop.prevent="form.model = null"
              class="cursor-pointer"
            />
          </template>
          {{ form.model }}
        </q-select>
        <q-input filled v-model="form.date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-toggle
          name="music_active"
          v-model="form.toggle"
          label="Activate music"
          true-value="참"
          false-value="거짓"
        />
        {{ form.toggle }}
        <div class="q-gutter-sm">
          <q-btn label="validate" color="secondary" @click="validate" />
          <q-btn
            label="resetValidate"
            color="warning"
            @click="resetValidation"
          />
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script>
export default {
  naem: 'form-handling',
};
</script>
<script setup>
import { ref } from 'vue';

const form = ref({
  title: '',
  content: '내용',
  model: ['Google'],
  date: null,
  toggle: 'true',
});
const options = [
  { label: '구글', value: 'Google' },
  { label: '페이스북', value: 'Facebook' },
  { label: '트위터', value: 'Twitter' },
  { label: '애플', value: 'Apple' },
  { label: '오라클', value: 'Oracle' },
];

const myFrom = ref(null);

function validate() {
  myFrom.value.validate().then(success => {
    if (success) {
      // yay, models are correct
      console.log('sucscess', success);
    } else {
      console.log('not success', success);
      // oh no, user has filled in
      // at least one invalid value
    }
  });
}

// to reset validations:
function resetValidation() {
  myFrom.value.resetValidation();
}

function onSubmit() {
  if (form.value.accept !== true) {
    alert('성공');
  } else {
    alert('실패');
  }
}
function onReset() {
  for (var key in form.value) {
    console.log(key);
    form.value[key] = null;
  }
}
</script>

<style lang="scss" scoped></style>
