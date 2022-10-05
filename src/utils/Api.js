function Api() {
  return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export default Api;
