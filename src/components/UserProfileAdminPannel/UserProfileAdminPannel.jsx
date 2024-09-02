import React, { useState, useCallback } from "react";
import "./UserProfileAdminPannel.css";
import ImageUploader from "../ImageUploader/ImageUploader";

const UserProfileAdminPannel = React.memo(({ src, title }) => {
  const [mouseEnterProfileImage, setMouseEnterProfileImage] = useState(false);
  const [imageUploader, setImageUploader] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setMouseEnterProfileImage(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseEnterProfileImage(false);
  }, []);

  const toggleImageUploader = useCallback(() => {
    setImageUploader(prev => !prev);
  }, []);

  return (
    <>
      <article className="profile-info-pannel flex flex-col items-center px-2 py-4 bg-[#ededed] w-[230px] h-[100%]">
        <div
          id="profile-image-main-container"
          className="w-[79px] p-[3px] flex items-center justify-center relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div id="profile-image-null-container" className="w-[100%]">
            <img src={src} alt="Profile" className="profile-image w-[100%]" />
          </div>
          {mouseEnterProfileImage && (
            <div
              id="profile-image-null-icon-cont"
              onClick={toggleImageUploader}
              className="flex items-center justify-center absolute top-[0%] w-[100%] h-[100%] text-[#d4d4d4] bg-[rgba(0,0,0,0.5)]"
            >
              <i className="fa-solid fa-camera self-end mb-3"></i>
            </div>
          )}
        </div>
        <h1 className="profile-name font-bold text-[18px] text-center text-[#101010]">
          {title}
        </h1>
      </article>
      {imageUploader && <ImageUploader />}
    </>
  );
});

export default UserProfileAdminPannel;