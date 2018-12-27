import axios from "axios";

const classifyApi = img => {
  const url = `https://api.myjson.com/bins/ylkh0`;
  return axios.get(url);
};

export default classifyApi;
