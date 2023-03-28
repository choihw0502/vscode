<template>
  <q-page padding>
    <section class="row q-py-lg q-col-gutter-x-xl">
      <div class="col-12 col-sm-auto bg-primary flex flex-center">
        <q-avatar size="150px">
          <q-img src="/avatar.png"></q-img>
        </q-avatar>
      </div>
      <div class="col-grow column justify-between">
        <div class="row justify-between items-center">
          <span class="text-h4">이름</span>
          <q-space />
          <div class="q-gutter-x-sm">
            <q-btn outline color="secondary" label="프로필 편집1"></q-btn>
            <q-btn outline color="secondary" label="프로필 편집2"></q-btn>
            <q-btn
              outline
              color="secondary"
              icon="more_horiz"
              label="설정"
            ></q-btn>
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span class="text-h5">게시물 0</span>
          <span class="text-h5">팔로워 0</span>
          <span class="text-h5">팔로우 0</span>
        </div>
        <div>
          <textarea>info</textarea>
        </div>
      </div>
    </section>
    <section class="row no-wrap scroll q-col-gutter-x-md">
      <div class="col-auto" v-for="n in 15" :key="n">
        <article>
          <q-avatar size="70px"><q-img src="/avatar.png"></q-img></q-avatar>
          <div class="text-center q-mt-sm">제목</div>
        </article>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="row q-col-gutter-sm">
        <div class="col-12 col-sm-4 col-md-4 col-lg-3" v-for="n in 19" :key="n">
          <q-card class="my-card">
            <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div
                class="absolute-bottom text-subtitle2 full-height flex flex-center"
              >
                Title
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'gridTwo',
};
</script>

<script setup></script>

<style lang="scss" scoped>
q-page {
  background-color: #fafafa;
}
</style>
