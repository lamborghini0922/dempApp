import axios from "axios";

const classifyApi = img => {
  console.log(`classifyApi ${img}`);
  const url = `https://api.myjson.com/bins/vvdr0`;
  return axios.get(url);
};

export default classifyApi;
