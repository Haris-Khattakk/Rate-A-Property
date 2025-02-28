import axios from "axios";

const Baseurl = "http://localhost:3000";

const Login = async (data) => {
  try {
    const response = await axios.post(`${Baseurl}/login`);
    return response;
  } catch (error) {
    return error;
  }
};

export const APIS = {
  Login,
};
