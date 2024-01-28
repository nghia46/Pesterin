import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import MainHeader from "~/layouts/MainHeader";
import MoreOptions from "~/components/Create/MoreOptions";
import styles from "./Create.module.scss";
const cx = classNames.bind(styles);
function Create() {
  const fileInputImageRef = useRef();
  const textareaRef = useRef(null);

  const [uploadImagePreview, setUploadImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [isCheckedAds, setIsCheckedAds] = useState(true);
  const [isCheckedComment, setIsCheckedComment] = useState(true);
  const [isCheckedSimilar, setIsCheckedSimilar] = useState(true);

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showUploadInformation, setShowUploadInformation] = useState(false);
  const [showPublishBtn, setShowPublishBtn] = useState(false);

  const [textareaRows, setTextareaRows] = useState(1);

  useEffect(() => {
    // Automatically resize the textarea when the content is changed
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
    // Calculate the number of rows based on scrollHeight and clientHeight
    const extraLines =
      (textareaRef.current.scrollHeight - textareaRef.current.clientHeight) /
      20;
    const calculatedRows = Math.max(1, Math.ceil(extraLines));
    setTextareaRows(calculatedRows);
  }, [description]);

  const handleClickUploadImage = () => {
    fileInputImageRef.current.click();
  };

  const handleChangeUploadImage = async (e) => {
    let file = null;

    //Preview Image
    file = e.target.files[0];

    const url = URL.createObjectURL(file);
    if (uploadImagePreview) {
      URL.revokeObjectURL(uploadImagePreview);
    }
    setUploadImagePreview(url);
    setShowUploadInformation(true);
    setShowPublishBtn(true);
  };

  const handleDeleteUploadImage = () => {
    setUploadImagePreview(null);
    setShowUploadInformation(false);
    setShowPublishBtn(false);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePublishPin = () => {};

  const handleShowMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };
  return (
    <div className={cx("create-wrapper")}>
      <MainHeader />
      <div className={cx("create-container")}>
        <div className={cx("create-nav")}>
          <div className={cx("open")}>
            <div className={cx("open-icon")}>
              <i className={cx("fa-solid fa-chevrons-right", "icon")}></i>
            </div>
          </div>
          <div className={cx("plus")}>
            <div className={cx("plus-icon")}>
              <i className={cx("fa-solid fa-plus", "icon")}></i>
            </div>
          </div>
        </div>
        <div className={cx("create-content")}>
          <div className={cx("content-top")}>
            <div className={cx("content-left")}>
              <div className={cx("title")}>Create Pin</div>
            </div>
            <div className={cx("content-right")}>
              {showPublishBtn && (
                <button
                  className={cx("publish-btn")}
                  onClick={handlePublishPin}
                >
                  Publish
                </button>
              )}
            </div>
          </div>
          <div className={cx("content-container")}>
            <div className={cx("container-main")}>
              <div className={cx("upload-image-container")}>
                {uploadImagePreview ? (
                  <div className={cx("upload-image-preview")}>
                    <img
                      src={uploadImagePreview}
                      alt="upload-img-preview"
                      className={cx("image-upload")}
                    />
                    <div
                      className={cx("delete-upload-image")}
                      onClick={handleDeleteUploadImage}
                    >
                      <i className={cx("fa-solid fa-trash", "icon")}></i>
                    </div>
                  </div>
                ) : (
                  <div className={cx("upload-image-main")}>
                    <div
                      className={cx("upload-content")}
                      onClick={handleClickUploadImage}
                    >
                      <div className={cx("main")}>
                        <i
                          className={cx(
                            "fa-sharp fa-solid fa-circle-up",
                            "icon"
                          )}
                        ></i>
                        <div className={cx("text")}>
                          Choose a file or drag and drop it here
                        </div>
                      </div>
                      <div className={cx("sub")}>
                        <div className={cx("text")}>
                          We recommend using high quality .jpg files less than
                          20MB.
                        </div>
                      </div>
                      <input
                        ref={fileInputImageRef}
                        type="file"
                        accept="image/*"
                        name="img"
                        multiple
                        className={cx("image-input")}
                        style={{ display: "none" }}
                        onChange={handleChangeUploadImage}
                      />
                    </div>
                    <div className={cx("upload-url")}>
                      <button className={cx("save-url-btn")}>
                        Save from URL
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={
                  showUploadInformation
                    ? cx("upload-information-container")
                    : cx(
                        "upload-information-container",
                        "upload-information-container-disabled"
                      )
                }
              >
                {/* Title */}
                <div className={cx("title-content")}>
                  <div className={cx("title")}>Title</div>
                  <div className={cx("title-input")}>
                    <input
                      type="text"
                      placeholder="Add a title"
                      spellCheck={false}
                      autoFocus={false}
                      className={cx("input")}
                    />
                  </div>
                </div>
                {/* Description */}
                <div className={cx("desc-content")}>
                  <div className={cx("title")}>Description</div>
                  <div className={cx("desc-input")}>
                    <textarea
                      className={cx("input")}
                      placeholder="Add a detailed description"
                      onChange={handleDescriptionChange}
                      value={description}
                      rows={textareaRows}
                      ref={textareaRef}
                      autoFocus={true}
                    ></textarea>
                  </div>
                </div>
                {/* Link */}
                <div className={cx("link-content")}>
                  <div className={cx("title")}>Link</div>
                  <div className={cx("link-input")}>
                    <input
                      type="text"
                      placeholder="Add a link"
                      spellCheck={false}
                      autoFocus={false}
                      className={cx("input")}
                    />
                  </div>
                </div>
                {/* Tag */}
                <div className={cx("tag-content")}>
                  <div className={cx("title")}>Tagged topic</div>
                  <div className={cx("tag-input")}>
                    <input
                      type="text"
                      placeholder="Add a tag"
                      spellCheck={false}
                      autoFocus={false}
                      className={cx("input")}
                    />
                  </div>
                  <div className={cx("sub")}>
                    Don't worry, people won't see your tags
                  </div>
                </div>
                {/* More options */}
                <div
                  className={
                    showMoreOptions
                      ? cx("more-options", "more-options-show")
                      : cx("more-options")
                  }
                  onClick={handleShowMoreOptions}
                >
                  <div className={cx("text")}>More options</div>
                  <i className={cx("fa-solid fa-chevron-down", "icon")}></i>
                </div>
                {/* Show more options */}
                {showMoreOptions && (
                  <MoreOptions
                    isCheckedAds={isCheckedAds}
                    isCheckedComment={isCheckedComment}
                    isCheckedSimilar={isCheckedSimilar}
                    setIsCheckedAds={setIsCheckedAds}
                    setIsCheckedComment={setIsCheckedComment}
                    setIsCheckedSimilar={setIsCheckedSimilar}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
