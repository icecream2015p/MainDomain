// 解析するURL
const url = location.href;

// URLをオブジェクトに変換
const urlParams = new URL(url).searchParams;

// 'x'の値を変数に格納
const xValue = urlParams.get('url');

// 結果を出力
location.href = xValue
