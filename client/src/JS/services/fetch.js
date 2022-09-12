import SECRET from '..//secrets.js'
const url = SECRET.URL_LOCAL_SERVER;

class Fetch {
  constructor(url) {
    this.url = url;

  }
  get(path) {
    const url = `${this.url}/${path}`;
    return this.request("GET", url);
  }

  put(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("PUT", url, body);
  }

  async post(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("POST", url, body);
  }

  delete(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("DELETE", url, body);
  }

  request(method, url, body) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = "json";
      xhr.setRequestHeader("Content-Type", 'application/json',);
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*',);
      xhr.setRequestHeader("authorization", `Bearer ${JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")).token : null}`);
      xhr.onload = () => { xhr.status >= 400 ? reject("not found") : resolve(xhr.response) };
      xhr.send(JSON.stringify(body));
    });
  }
}

export default new Fetch(url);