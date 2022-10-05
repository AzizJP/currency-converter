function Api() {
  return fetch("https://cdn.cur.su/api/latest.json").then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export default Api;
