const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const clour_name = import.meta.env.VITE_CLOUD_NAME;
const uploadImageToCloudinary = async (file) => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", upload_preset);
  uploadData.append("clour_name", clour_name);
  const res = await fetch(
    `https://api.cloudnary.com/v1_1/${clour_name}/image/upload`,
    {
      method: 'post',
      body: uploadData,
    }
  );
  const data = await res.json();
  return data;
};
export default uploadImageToCloudinary;
