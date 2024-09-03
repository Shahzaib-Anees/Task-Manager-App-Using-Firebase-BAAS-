import { useRef} from "react";
import "./ImageUploader.css";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../FirebaseConfig/firebase";
function ImageUploader() {
  const fileUploader = async (storageFolderName, file) => {
    try {
      const storageRef = ref(storage, `${storageFolderName}`);
      const snapshot = await uploadBytes(storageRef, `${file}`);
      console.log("Uploaded a blob or file===>" , snapshot );
      
    } catch (error) {
      console.log(error);
    }
  };

  const removeImageFileUploader = () => {
    document.getElementById("image-file-uploader").style.display = "none";
  };

  const image = useRef();

  const getUploadedFile = (evt) => {
    evt.preventDefault();
    console.log(image.current);
   const uploadedImage = image.current.files[0];
   console.log(uploadedImage);
    fileUploader(`userImages/${uploadedImage.name}` , uploadedImage);
  };
  return (
    <>
      <div
        id="image-file-uploader"
        className="flex flex-col w-[400px] h-[fit-content] px-3 py-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          onClick={removeImageFileUploader}
          className="self-end text-[24px] text-bold hover:text-[red] cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <form
          onSubmit={getUploadedFile}
          className="flex flex-col items-center justify-center  p-6 gap-4"
        >
          <input
            type="file"
            accept="image/*"
            name="profile-image-input"
            id="profile-image-input-field"
            ref={image}
          />
          <button
            type="submit"
            className="w-[100%] bg-[#1F2937] text-[#fff] text-[18px] font-bold p-1"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default ImageUploader;
