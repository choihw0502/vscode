# git local setting

```sh
# 프로젝트 폴더 이동
$ cd {프로젝트 폴더}

# 복사한 Github 주소 등록
$ git remote add origin https://github.com/choihw0502/vscode.git

# branch 확인
$ git branch

# branch 이름 변경 master -> main
# github 기본 branch 이름이 master에서 main으로 변경됨
# 하지만 git의 기본 master이기 때문에 main으로 변경
$ git branch -m master main

# github 변경 정보 있는지 pull
$ git pull origin main --allow-unrelated-histories

# vs code에서 commit한 파일 repository에 push
$ git push -u origin main
```
