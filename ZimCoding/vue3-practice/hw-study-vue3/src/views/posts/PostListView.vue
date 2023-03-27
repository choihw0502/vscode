<template>
  <div>
    <h2>게시글 목록</h2>

    <hr class="my-3" />
    <Filter v-model:title="params.title_like" v-model:limit="params._limit" />
    <!-- <form @submit.prevent>
      <div class="row g-3">
        <div class="col-6">
          <input type="text" class="form-control" v-model="params.title_like" />
        </div>
      </div>
      <div class="col-3">
        <select v-model="params._limit" class="form-select">
          <option value="3">3개씩 보기</option>
          <option value="6">6개씩 보기</option>
          <option value="9">9개씩 보기</option>
        </select>
      </div>
    </form> -->
    <hr class="my-3" />
    <!-- <div class="row g-3"> -->
    <!-- <div v-for="post in posts" :key="post.id" class="col-4"> -->
    <Loading v-if="loading"></Loading>
    <Error v-else-if="error" :message="error.message"></Error>
    <template v-else>
      <Grid :items="posts" v-slot="{ item }">
        <ItemCard
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goPage(item.id)"
          @modal="openModal(item)"
        >
        </ItemCard>
        <!-- Props & Emit으로 Modal 구성 -->
        <!-- <Modal :show="show" title="게시글" @close="closeModal()"> 
        <template #default>
          <div class="row g-3">
            <div class="col-3 text-muted">제목</div>
            <div class="col-9">{{ item.title }}</div>
            <div class="col-3 text-muted">내용</div>
            <div class="col-9">{{ item.content }}</div>
            <div class="col-3 text-muted">생성일</div>
            <div class="col-9">{{ item.createdAt }}</div>
          </div>
        </template>
        <template #actions>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal()"
          >
            Close
          </button>
        </template>
      </Modal>-->
        <!-- v-model 로 ModalCompo 구성-->
        <!-- app이라는 ID 밑으로 해당 element를 생성한다. -->

        <!-- v-model="show" -->
        <ModalCompo
          v-model="show"
          :title="openItem['title']"
          :content="openItem['content']"
          :createdAt="openItem['createdAt']"
        />
      </Grid>

      <!-- </div>
    </div> -->

      <Pagination
        :current-page="params._page"
        :page-count="pageCount"
        @childpage="(page) => (params._page = page)"
      />
    </template>
    <hr class="my-5" />
    <template v-if="posts && posts.length > 0">
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import { getPosts } from '@/api/posts'
import { ref, reactive, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import AppCard from '@/components/AppCard.vue'
import PostDetailView from './PostDetailView.vue'
import { useAxios } from '@/composables/axios'

const router = useRouter()

// const posts = ref([])
const params = ref({
  _sort: 'id',
  _order: 'desc',
  _page: 1,
  _limit: 6,
  title_like: ''
})

//composables/axios Call
const { data: posts, error, loading, response } = useAxios('/posts', { method: 'get', params })
const totalCount = computed(() => response.value.headers['x-total-count'])
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit))
/*
// const fetchPosts = async () => {
  const { data } = await getPosts()
    posts.value = data
    아래 내용과 동일한 문법
    ({ data: posts.value } = await getPosts())
 
  // try {
  //   loading.value = true
  //   const { data, headers } = await getPosts(params.value)
  //   posts.value = data
  //   totalCount.value = headers['x-total-count']
  // } catch (err) {
  //   error.value = err
  // } finally {
  //   loading.value = false
  // }

Promise 타입 상용문법
  async () => {
    await getPosts()
  }
  -- 위, 아래 동일한 내용 --
  getPosts()
  .then(function (result) {
    console.dir(result.data)
  })
  
  fetchPosts()
  watchEffect(fetchPosts)
}
*/

const goPage = (id) => {
  // router.push('/posts/' + id);
  // router.push(`/posts/${id}`);
  router.push({
    name: 'postDetail',
    params: posts.value.find((post) => {
      return post.id == id
    }),
    query: {
      searchText: 'hello'
    },
    hash: '#world'
  })
}

const show = ref(false)
const openItem = reactive({ title: '', content: '', createdAt: '' })

const openModal = (item) => {
  show.value = true
  Object.assign(openItem, item)
}

const closeModal = () => {
  show.value = false
}
</script>

<style lang="scss" scoped></style>
