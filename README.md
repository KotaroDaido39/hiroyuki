
# ①課題番号-プロダクト名
課題5 ひろゆき論破Bot

# ②課題内容（どんな作品か）
- 論破しようとしてくるひろゆきとおしゃべり出来るアプリ。
なにかチャットを送るとひろゆきが論破してくれます。
APIの課題ということで、GeminiをAPIで呼び出して、プロンプトでひろゆき風にカスタマイズしています。

# ③DEMO
- https://ddktr.sakura.ne.jp/hiroyuki-api/

# ④作ったアプリケーション用のIDまたはPasswordがある場合
- ID: 〇〇〇〇〇〇〇〇
- PW: 〇〇〇〇〇〇〇〇

# ⑤工夫した点・こだわった点
- エラーメッセージもひろゆき風にしてみた。
- APIキーが含まれないように.envファイルに保存してViteでビルドした

# ⑥難しかった点・次回トライしたいこと(又は機能)
- Viteの導入する際に、CSSの読み込み方が特殊だったりして困った。
次回はサーバーサイドでAPIの処理をするような構成にチャレンジしてみたいと思った。

## ⑦質問・疑問・感想、シェアしたいこと等なんでも
- [シェアしたいこと] 
GeminiはAPIを無料で使用することが出来るので、LLMのアプリを作ってみたい人は第一候補に上がると思います！
- [質問] 
- [感想]  
- [参考記事]
  - 1. https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/send-chat-prompts-gemini?hl=ja
  - 2. https://qiita.com/ibetaku/items/2bd781db13dda76d2804
  - 3. https://qiita.com/owayo/items/8b4cb63b35b84a343054
