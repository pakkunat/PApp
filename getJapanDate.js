/**
 * 和暦取得
 * @param {Date} date 日付
 * @return {String} 和暦の日付
 */
function getJapanDate(date) {
  const reiwaYear = 2019;
  const reiwaMonth = 5;
  const reiwaDay = 1;

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let y = year - reiwaYear + 1;
  var japanYear = "";
  if (y == 1) {
    japanYear = "元";
  } else {
    japanYear = y.toString();
  }

  return Utilities.formatString("令和%s年%s月%s日", japanYear, month, day);
}
