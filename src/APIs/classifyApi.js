import axios from "axios";

const classifyApi = img => {
  console.log(`classifyApi ${img}`);
  const url = `https://api.myjson.com/bins/19w51o`;
  return axios.get(url);
};

export default classifyApi;
