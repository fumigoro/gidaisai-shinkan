# 岐阜大学祭全学執行委員会 新歓特設ウェブサイト

コロナ渦で対面での新歓ができないことを受け、岐大祭執行委員会について新入生に知ってもらうための新歓ウェブサイト

nuxt/contentのハンズオンがてら作成しました

岐阜大学祭公式ウェブサイト内にて公開中！！
https://www.gidaisai.jp/shinkan/

# 開発環境の立ち上げ方

## リポジトリをクローン

```shell
git clone https://github.com/fumigoro/gidaisai-shinkan.git
```

クローンしたら、リポジトリのディレクトリに移動してください

## パッケージのインストール

```shell
npm install
```

## 開発サーバーの起動

```shell
npm run dev
```

ローカルにサーバーが立ち、[http://localhost:3000/shinkan/](http://localhost:3000/shinkan/) にアクセスするとサイトが表示されます

`/pages`配下の.vueファイルがサイトのHTMLの元になっているので、ここを編集するとサイトの内容が変わります

## サーバーにアップロードする静的ファイルを生成

```shell
npm run generate
```

`/dist`配下に静的ファイルが生成されるので、この中のファイルをFTPでサーバーにアップロードすればサイトが更新されます
