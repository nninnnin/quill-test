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

      input.addEventListener("change", async (e) => {
        console.log(e.target.files);

        const file = e.target.files[0];

        console.log(file);
        const arrayBuffer = await file.arrayBuffer();

        const projectId = "71355a64";

        const res = await fetch(
          `https://api.memexdata.io/memex/api/projects/${projectId}/files/access`,
          {
            method: "POST",
            body: file,
            headers: {
              "Access-Token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJSRUJFTDkiLCJpYXQiOjE3MjE4OTkxODcsImV4cCI6MjAzNzI1OTE4NywiSUQiOiI3MTM1NWE2NCIsIkRPTUFJTiI6WyIqIl0sIlRZUEUiOiJFWFRFUk5BTCJ9.KyIdem9bfHSjSPPbV2JP1dwTjUIilXfSj4nhzR2uhQg",
            },
          }
        );

        console.log(await res.json());

        // const range = getEditor().getSelection(true);

        // getEditor().insertEmbed(range.index, "image", `/images/spinner.svg`);

        // try {
        //   // upload image to memex server

        //   // const filePath = `contents/temp/${Date.now()}`;
        //   // const url = await uploadImage(file, filePath);

        //   getEditor().deleteText(range.index, 1);
        //   getEditor().insertEmbed(range.index, "image", url);
        //   getEditor().setSelection(range.index + 1);
        // } catch (e) {
        //   getEditor().deleteText(range.index, 1);
        // }
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
