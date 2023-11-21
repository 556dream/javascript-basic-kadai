const birthday = new Date();
const day = birthday.getDate();
const year = birthday.getFullYear();
const month = birthday.getMonth()+1;

console.log(year+ "年" + month + "月" + day + "日");