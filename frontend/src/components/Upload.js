import React, { useState } from "react";

function ImageUploadForm() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle image upload here
    console.log(selectedImage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-5 text-white text-xl font-semibold">
        <label htmlFor="image-input">Upload Image:</label>
        <input
          type="file"
          id="image-input"
          accept=".jpg,.jpeg,.png"
          onChange={handleImageSelect}
          className="ml-5 text-ellipsis overflow-hidden"
        />
      </div>
      <button className="ml-5 text-2xl font-semibold text-white border-2 border-white rounded-xl pl-4 pr-4 hover:bg-white hover:text-orange-600 duration-300" type="submit">Submit</button>
    </form>
  );
}

export default ImageUploadForm;







