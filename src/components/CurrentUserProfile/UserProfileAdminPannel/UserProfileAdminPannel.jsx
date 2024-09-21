import React, { useState, useCallback } from "react";
import "./UserProfileAdminPannel.css";
import ImageUploader from "../ImageUploader/ImageUploader";
import {Link} from "react-router-dom";

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
    setImageUploader((prev) => !prev);
  }, []);

  return (
    <>
      <article className="profile-info-pannel flex flex-col items-center py-4 bg-[#ededed] w-[230px] h-[100%]">
        <div
          id="profile-image-main-container"
          className="w-[93px] h-[93px] p-[3px] flex items-center justify-center relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div id="profile-image-null-container" className="w-[90px] h-[90px]">
            <img
              src={src}
              alt="Profile"
              className="profile-image w-[100%] h-[100%]"
            />
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
        <ol className="mt-2 flex flex-col py-2 items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center py-3 gap-[2px] w-full">
            <Link className="link-item" to="/profile/profilePannelList">
              <span className="text-[22px] px-3">
                <i className="fa-solid fa-note-sticky"></i>
              </span>
              All
            </Link>
            <Link className="link-item" to="/profile/profilePannelList">
              <span className="text-[22px] px-3">
                <i className="fa-solid fa-square-check"></i>
              </span>
              Completed
            </Link>
            <Link className="link-item" to="/profile/profilePannelList">
              <span className="text-[22px] px-3">
                <i className="fa-solid fa-square-xmark"></i>
              </span>
              Incompleted
            </Link>
          </div>
        </ol>
      </article>
      {imageUploader && <ImageUploader />}
    </>
  );
});

export default UserProfileAdminPannel;
