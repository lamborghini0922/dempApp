import axios from "axios";

const signInApi = (user, password) => {
  console.log(`signInAPI ${user} ${password}`);
  const url = `https://api.myjson.com/bins/lynuo?user=${user}&password=${password}`;
  return axios.get(url);
};

export default signInApi;
