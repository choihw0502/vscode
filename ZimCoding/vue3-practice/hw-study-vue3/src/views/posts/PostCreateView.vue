<template>
	<div>
		<h2>게시글 생성</h2>
		<hr class="my-1" />
		<form @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input type="text" readonly class="form-control" id="title" />
			</div>
			<div class="col-mb">
				<label for="content" class="visually-hidden">Password</label>
				<input type="password" class="form-control" id="content" />
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button type="button" class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goListPage = () => {
	router.push({ name: 'postList' });
};
</script>

<style lang="scss" scoped></style>
