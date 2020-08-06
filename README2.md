# DockerでReactの環境構築

### このリポジトリをクローンし、ディレクトリ移動
```bash
$ git clone https://github.com/2754github/React_with_Docker.git
$ cd React_with_Docker
```

### ビルド
```bash
$ docker-compose build
```
※かなり時間かかる

### Reactアプリ作成（w/TypeScript）
```bash
$ docker-compose run --rm app sh -c "npx create-react-app react-app --template typescript"
```
※かなり時間かかる

### ついでにいろいろ導入
```bash
$ docker-compose run --rm app sh -c "cd react-app && npm install @material-ui/core"
$ docker-compose run --rm app sh -c "cd react-app && yarn cache clean && yarn add axios"
$ docker-compose run --rm app sh -c "cd react-app && yarn cache clean && yarn add @emotion/core @emotion/styled"
```
※かなり時間かかる  

- [@material-ui](https://material-ui.com/)
- [axios](https://yarnpkg.com/package/axios)
- [@emotion](https://emotion.sh/docs/install)

参考: dockerでyarn addすると遅い問題を改善する  
https://qiita.com/lisp719/items/432be06fb333d6158eb1

### コンテナ起動
```bash
$ docker-compose up
```

### 例のページが見られるか確認
http://localhost:3001/ にアクセス

### エラー対処
```bash
error An unexpected error occurred: "ENOENT: no such file or directory, lstat '/usr/src/app/react-app/node_modules/rxjs/fetch/'".
```
解決方法

```bash
yarn cache clean
```
参考: create-react-appがnpm / yarn の".cache"配下のファイルがないなどでエラーとなる場合の対処法  
https://qiita.com/Statham/items/94f0599ca1b311788423
