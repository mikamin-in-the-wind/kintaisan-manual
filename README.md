# きんたいさん 取扱説明書

Android 勤怠管理アプリ「きんたいさん」の取扱説明書を GitHub Pages で公開するためのリポジトリです。

https://mikamin-in-the-wind.github.io/kintaisan-manual/

## このリポジトリのファイルは手で編集しないでください

`index.html` は生成物です。原本はアプリ本体のリポジトリにある Markdown で、
アプリ内の「取扱説明書」もそこから作られています。

- 原本: `app/src/main/assets/user_manual.md`（kintaisan リポジトリ / 非公開）
- 生成: `python3 docs/build_manual_site.py`
- 反映: kintaisan リポジトリの master に push すると CI がここへ push します

ここを直接編集すると、次の自動反映で上書きされて消えます。
