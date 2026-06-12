import axios from "axios";

const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await axios.post(
    "https://v2.convertapi.com/upload",
    formData
  );

  return response.data.Url;
};

export default uploadImage;