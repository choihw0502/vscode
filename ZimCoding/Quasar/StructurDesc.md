# .quasar

해당 디렉토리는 삭제해도 quasar를 실행하면 자동생성되는 디렉토리고 소스 코드를 건드리면 안된다.
Quasar에서 자동생성 및 실행되는 디렉토리

# dist

빌드 실행시 생성되는 디렉토리

```sh
npm run build
```

# public

정적인 리소스를 모아두는 곳

# src/assets

build도구(vite)에 의해 전처리될 정적인 리소스

# src/boot

프로젝트가 boot 되기 전에 설정하기 위한 디렉토리

# src/components

재사용할 컨포넌트를 모아두는 디렉토리

# src/css

스타일 집합소
app.scss - 전역 스타일 집합
quasar.variables.scss - quasar재공하는 변수들의 스타일 변경

# src/layouts

페이지의 전체 영역을 쪼개는 구성화면

# src/pages

router에 의해 렌더링 될 페이지 구성화면

# src/router

페이지주소를 받아 렌더링하기위한 router 집합

# App.vue

root 파일

# .qrettierrc

소스 코드들의 Role 설정

# jsconfig.json

vscode에서 해당 프로젝트의 정보를 읽기위한 설정 팡리

# package.json

npm 정보를 관리하는 파일

# quasar.config.js

quasar 설정 파일
