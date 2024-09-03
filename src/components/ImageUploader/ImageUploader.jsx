import { useRef} from "react";
import "./ImageUploader.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../FirebaseConfig/firebase";
import { doc, updateDoc } from "firebase/firestore";
function ImageUploader() {
  const currentUser = localStorage.getItem("currentUser");
  // File Uploader Function
  const fileUploader = async (storageFileName, file) => {
    try {
      document.getElementById("loader-container").style.display = "flex";
      const storageRef = ref(storage, `${storageFileName}`);
      const snapshot = await uploadBytes(storageRef, file);
      console.log("Uploaded a blob or file===>", snapshot);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCurrentUserDoc = async (url) => {
    const userRef = doc(db, "siteUsers", `${currentUser}`);
    try {
      await updateDoc(userRef, {
        imageUrl: url,
      });
      console.log("Curent User Doc Updated !");
    } catch (error) {
      console.log(error);
    } finally {
      document.getElementById("loader-container").style.display = "none";
      location.reload();
    }
  };

  const getImageUrlfromServer = async (storageFileName) => {
    try {
      const url = await getDownloadURL(ref(storage, `${storageFileName}`));
      await updateCurrentUserDoc(url);
    } catch (error) {
      console.log(error);
    }
  };

  const removeImageFileUploader = () => {
    document.getElementById("image-file-uploader").style.display = "none";
  };

  const image = useRef();
  const getUploadedFile = async (evt) => {
    try {
      evt.preventDefault();
      document.getElementById("image-file-uploader").style.display = "none";
      console.log(image.current);
      const uploadedImage = image.current.files[0];
      await fileUploader(`userImages/${uploadedImage.name}`, uploadedImage);
      await getImageUrlfromServer(`userImages/${uploadedImage.name}`);
    } catch (error) {
      console.log(error);
    }
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
