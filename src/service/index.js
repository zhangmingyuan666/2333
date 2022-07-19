import MyRequest from "./request";

const myRequest = new MyRequest({
  baseURL: "http://192.168.123.6:8000",
  timeout: 5000,
});

export const picRequest = new MyRequest({
  baseURL: "",
  timeout: 5000,
});

export default myRequest;
