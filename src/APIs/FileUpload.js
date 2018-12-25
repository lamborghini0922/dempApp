import React from "react"
import DropZone from "react-dropzone"
import axios from "axios"


const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const loadingData = () => {
  return {
    type: "START_REQUEST",
    payload: ""
  };
};

const upload = imgData => {
  return dispatch => {
    dispatch(loadingData());
    console.log(`search ${word}`);
    dummy(imgData).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => {
        return item.images.downsized.url;
      });
      console.log(`api res ${imageUrlList}`);
      dispatch(receiveData(imageUrlList));
    });
  };
};

const someTask = () => {
  console.log('done task';)
}
const dummy = (imgData, callbackFunc) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callbackFunc())
    }, 5000)
  })  
}

export default upload;