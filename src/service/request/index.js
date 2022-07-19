import axios from "axios";

class MyRequest {
  instance;

  constructor(config) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有实例请求拦截成功");
        return config;
      },
      (err) => {
        console.log("失败");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有实例响应拦截成功");
        return res.data ?? res;
      },
      (err) => {
        console.log("失败");
        return err;
      }
    );
  }

  request(config) {
    return new Promise((reslove, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          reslove(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.request({ ...config, method: "POST" });
  }
}

export default MyRequest;
