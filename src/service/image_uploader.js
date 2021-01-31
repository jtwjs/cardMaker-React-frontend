
export default class ImageUploader {
  // onSubmit(e) {
  //   const file = e.currentTarget.files;
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset",
  //   "r7zt0zfq");
  // }

  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset','r7zt0zfq');
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/debedjtsv/image/upload",
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }

}