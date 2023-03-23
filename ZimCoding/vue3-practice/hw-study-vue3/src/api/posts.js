import { posts } from './axiosCom'

// axios
// const posts = [
//   { id: 1, title: '제목1', content: '내용1', createdAt: '2023-01-01' },
//   { id: 2, title: '제목2', content: '내용2', createdAt: '2023-01-01' },
//   { id: 3, title: '제목3', content: '내용3', createdAt: '2023-01-01' },
//   { id: 4, title: '제목4', content: '내용4', createdAt: '2023-01-01' },
//   { id: 5, title: '제목5', content: '내용5', createdAt: '2023-01-01' },
//   { id: 6, title: '제목6', content: '내용6', createdAt: '2023-01-01' },
//   { id: 7, title: '제목7', content: '내용7', createdAt: '2023-01-01' },
//   { id: 8, title: '제목8', content: '내용8', createdAt: '2023-01-01' }
// ]

export function getPosts(params) {
  return posts.get('/', { params })
}

export function getPostById(id) {
  //const numberId = parseInt(id)
  // return posts.find((post) => post.id === id)
  return posts.get('/' + id)
}

export function createPost(data) {
  return posts.post('', data)
}
// export function updatePost(id, data) {
//   return posts.put(`/${id}`, data)
// }
/* 전체 업데이트가 아닌 선택업데이트 하기위해선 patch를 사용해 json update 해야함 */
export function updatePost(id, data) {
  return posts.patch(`/${id}`, data)
}
export function deletePost(id) {
  return posts.delete(`/${id}`)
}
