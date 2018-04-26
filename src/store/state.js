// 使用try...catch 防止用户在隐身模式中使用出问题
let defaultCity = '吉安'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
