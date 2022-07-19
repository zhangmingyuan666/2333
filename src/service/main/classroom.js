import myRequest from "../index";
import { picRequest } from "../index";

const APIS = {
  getAllClassRoomAnalyzeDataAPI: "/getAllClassData",
  getExactClassRoomDataAPI: "/getOneClassData",
  getExactClassRoomStateAPI: "/getClassState",
  getExactClassDeviceStateAPI: "/getClassDeviceState",
  postClassDeviceControllerAPI: "/changeClassObject",
  getClassRoomPicAPI: "http://192.168.123.99:8000/output_0.jpg",
  getClassRoomPicCopyAPI: "http://192.168.123.99:8000/output_1.jpg",
};

export function getAllClassRoomData(url) {
  return myRequest.get({
    url,
  });
}

export function getAllClassRoomAnalyzeData() {
  return myRequest.get({
    url: APIS.getAllClassRoomAnalyzeDataAPI,
  });
}

export function getExactClassRoomData(id) {
  return myRequest.get({
    url: APIS.getExactClassRoomDataAPI + "/" + id,
  });
}

export function getExactClassRoomStateData(id) {
  return myRequest.get({
    url: APIS.getExactClassRoomStateAPI + "/" + id,
  });
}

export function getExactClassDeviceStateData(id) {
  return myRequest.get({
    url: APIS.getExactClassDeviceStateAPI + "/" + id,
  });
}

export function postClassDeviceController(classroom, device, state) {
  return myRequest.post({
    url: APIS.postClassDeviceControllerAPI,
    data: {
      classroom,
      device,
      state,
    },
  });
}

export function getClassRoomPic() {
  return picRequest.get({
    url: APIS.getClassRoomPicAPI,
  });
}

export function getClassRoomPicCopy() {
  return picRequest.get({
    url: APIS.getClassRoomPicCopyAPI,
  });
}
