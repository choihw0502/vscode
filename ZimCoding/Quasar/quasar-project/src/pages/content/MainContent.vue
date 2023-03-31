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
      <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-tabs v-model="tab" dense class="shadow-2">
            <!-- click 이벤트로 페이지 넘겨야함
            <q-tab name="mails" label="게시글" to="/" />
            <q-tab name="alarms" label="저장됨" to="/save" />
            <q-tab name="movies" label="태그글" to="/tag" />
           -->
            <!-- 라우터를 이용한 화면 전환 컴포넌트 -->
            <q-route-tab icon="mail" to="/main-content/" label="게시글" exact />
            <q-route-tab
              icon="alarms"
              to="/main-content/save"
              label="저장됨"
              exact
            />
            <q-route-tab
              icon="movies"
              to="/main-content/tag"
              label="태그글"
              exact
            />
          </q-tabs>
        </div>
      </div>
      <RouterView></RouterView>
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
