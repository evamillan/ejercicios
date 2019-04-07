function formatDate(userDate) {
  const [month, day, year] = userDate.split('/');

  return year + month + day;
}
console.log(formatDate('11/26/2014'));
