## 시작하기

설치
설치종류
=============

1. 페이지에 CDN package로 import 하기

```js
<script src="https://unpkg.com/vue@next"></script>
<!-- 또는 -->
<script src="https://unpkg.com/vue@3.2.31"></script>
```

---

2. npm을 사용하여 import 하기

### Vue CLI

#### Vue를 사용하여 대규모 애플리케이션을 구축할 때 NPM를 이용한 설치를 권장하고 있습니다. NPM은 Webpack 또는 Browserify와 같은 모듈 번들러와 잘 작동합니다.

```sh
npm install vue@next
```

### Vite

#### Vite(비트)는 Vue SFC를 지원하고 매우 가볍고 빠른 빌드 도구입니다. Vue!의 저자이기도 한 Evan You가 만들었습니다!

#### Vite는 개발 서버를 구동할 때 매우 빠릅니다. 그리고 소스 코드의 변경이 일어났을 때 전체 모듈을 번들링 하는게 아니라 변경된 모듈만 교체하기 때문에 개발을 더욱더 빠르게 진행할 수 있습니다.

---

3. 공식 CLI를 사용하여 프로젝트를 scaffold하고, 최신 프론트엔드 워크플로우(예. hot-reload, lint-on-save 등)를 위한 batteries-included build를 제공합니다.

---

> 💡scaffold란? 개발을 용이하기 시작할 수 있는 발판을 제공해주는 것을 말합니다.
> batteries-included란? 외부 라이브러리를 더하지 않아도 기본적으로 제공하는 표준 라이브러리만으로도 시작하는데 문제 없다는 의미로 해석할 수 있습니다.

## 1. node.js 설치 ( npm 사용하기 위함)

## 2. vue 설치

```sh
npm init vue@latest
<!-- 설치된 프로젝트 안을 이동 -->
cd [project]
<!-- 의존성 모듈 설치 -->
npm install
<!-- 실행 -->
npm run dev
```

## 3. eslint 전체 검사 명령어

```sh
npm run lint
```

## 4. bootstrap 설치

```bash
npm install bootstrap
npm install bootstrap-icons
```

## 5.Vue Router 설치

뷰 라우터는 Vue.js를 이용하여 싱글 페이지 애플리케이션(SPA)을 구현할 때 사용하는 Vue.js의 공식 라우터 입니다.

### **라우터란? (Router)**

라우터라고 하면 일반적으로 네트워크간에 데이터를 전송하는 장치를 말합니다. 뷰에서 말하는 라우터는 쉽게 말해서 URL에 따라 어떤 페이지를 보여줄지 매핑해주는 라이브러리라고 보시면 될 것 같습니다.

예를 들어 “`‘/home’` 경로로 요청이 들어왔을때 `‘Home.vue’` 컴포넌트를 화면에 렌더링 해라!” 라는 역할을 수행하는 라이브러리라고 보시면 될 것 같습니다. 그리고 이때 `‘/home’` → `‘Home.vue’` 이러한 매핑정보를 라우트(Route)라고도 합니다.

### 라우트란? (Route)

어떤 URL에 대해 어떤 페이지를 표시해야 하는지에 대한 정보

## 설치

```bash
npm install vue-router
```

## json-server 설치(테스트용)

```bash
npm install -D json-server
```

설치 후 실행한다

```bash
# test 서버 실행
npx json-server --watch db.json

# 포트 변경
npx json-server --watch db.json --port [포트설정]

# package.json 파일에 스크립트 등록 후
npm run db
```

## axios 설치

[axios]https://github.com/axios/axios

```sh
npm install axios
```
