import React, { useEffect, useRef } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor() {
  const ref = useRef();

  useEffect(() => {
    // Add custom image handler
    const quill = ref.current.getEditor();
    const toolbar = quill.getModule("toolbar");

    const handleImage = (e) => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.addEventListener("change", (e) => {
        console.log(e.target.files);

        const file = e.target.files[0];

        // upload image to memex server
      });
    };

    toolbar.addHandler("image", handleImage);
  }, []);

  const handleButtonClick = () => {
    console.log(ref.current.value);
  };

  return (
    <>
      <ReactQuill
        modules={{
          toolbar: ["image"],
        }}
        ref={ref}
      />

      <button onClick={handleButtonClick}>get value</button>
    </>
  );
}

export default Editor;
