/**
 * 最終更新日を挿入
 * @param {Number} row 行
 */
function insertLastUpdate(row) {
  // バインドされているドキュメントを取得
  let document = DocumentApp.getActiveDocument();

  // ドキュメントの1行目を削除
  let paragraph = document.getBody().getParagraphs()[row].clear();

  // 1行目に最終更新日を設定
  paragraph.setText(Utilities.formatString("最終更新日 %s", getJapanDate(new Date())));
}
