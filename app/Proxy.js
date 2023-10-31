import axios from "axios";

export const Proxy = async (method, api, request, isUseToken = true) => {
  let result ={}
  try {
    if (method.toLowerCase() === "get") {
      const response = await axios.get(api);
      result.success = response.data?.success;
      result.data = response?.data?.data;
    } else {
      const response = await axios.post(api, request || {});
      result.success = response.data?.success;
      result.data = response?.data?.data;
    }
  } catch (err) {
    result.message = err;
  }
  return result;
};