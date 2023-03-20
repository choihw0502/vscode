<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-1" />
		<form @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input type="text" readonly class="form-control" id="title" />
			</div>
			<div class="col-mb">
				<label for="content" class="visually-hidden">Password</label>
				<textarea class="form-control" rows="5" id="content"></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button type="button" class="btn btn-outline-primary">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const goDetailPage = () => {
	router.push({ name: 'postDetail', param: { id } });
};
</script>

<style lang="scss" scoped></style>
