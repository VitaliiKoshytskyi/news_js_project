import { alreadyRead } from './add-to-read';

export function addFetchedToLocalStorage(response) {
  const json = alreadyRead.getJsonFromLocalStorage('NewsFromHome');
  const news = alreadyRead.dataFromLocalStorage(json);
  if (news !== null) {
    alreadyRead.newsArr = [...news, ...response];

    const uniq = uniqNews(alreadyRead.newsArr);

    localStorage.setItem('NewsFromHome', JSON.stringify(uniq));
  } else {
    localStorage.setItem('NewsFromHome', JSON.stringify(response));
  }
}

function uniqNews(arr) {
  let seen = {};
  return arr.filter(function (item) {
    var key = JSON.stringify(item);
    return !(key in seen) && (seen[key] = item);
  });
}
