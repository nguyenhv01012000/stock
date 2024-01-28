import React, { useRef, useState, useMemo, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import ImageResize from "quill-image-resize-module-react";
import VideoResize from 'quill-video-resize-module2'
import "./DashboardQuill.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";

const fontSizeArr = ["12px", "14px", "16px", "18px"];
const fontArr = ['Ubuntu', 'Raleway', 'Roboto', 'Lato', 'Montserrat', 'Times-New', 'Arial'];


export default function DashboardQuill(props) {
  const [blog, setBlog] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  useMemo(() => {
    const Size = Quill.import("attributors/style/size");
    const Font = Quill.import('formats/font');
    const Embed = Quill.import('blots/embed');
    Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto', 'Lato', 'Montserrat', 'Times-New', 'Arial'] ;
    Quill.register(Font, true);
    Size.whitelist = fontSizeArr;
    // Quill.register(Size, true);
    Quill.register("modules/imageResize", ImageResize);
    Quill.register('modules/VideoResize', VideoResize);
    Quill.register(
      {
        "formats/emoji": quillEmoji.EmojiBlot,
        "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
        "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
        "modules/emoji-shortname": quillEmoji.ShortNameEmoji
      },
      true
    );

  }, []);

  const editorRef = useRef();

  const onChangeBlog = (value) => {
    setBlog(value)
    setIsLoad(true)
    props.setBlog(value)
  }

  useEffect(() => {
    if (props.blog && !isLoad) {
        setBlog(props.blog);
    }
  }, [props.blog]);

  useEffect(() => {
    setIsLoad(() => false);
  }, []);

  return (
    <div className="App">
      <ReactQuill
        value={blog}
        onChange={onChangeBlog}
        ref={editorRef}
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: fontArr }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [
              { align: "" },
              { align: "center" },
              { align: "right" },
              { align: "justify" }
            ],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
              {
                color: [] 
              },
              {
                background: []
              },
            ],
            ["link", "image", "video"],
            ['clean'],
            ['emoji'],
            
          ],
          clipboard: {
            matchVisual: false
          },
          imageResize: {
            modules: ["Resize", "DisplaySize"]
          },
          VideoResize: {
            modules: [ 'Resize', 'DisplaySize'],
            tagName: 'iframe', // iframe | video
          },
          "emoji-toolbar": true,
          "emoji-textarea": false,
          "emoji-shortname": true
        }}
        // formats={[
        //   "header",
        //   "font",
        //   "size",
        //   "bold",
        //   "italic",
        //   "underline",
        //   "strike",
        //   'blockquote',
        //   "list",
        //   "bullet",
        //   "indent",
        //   "link",
        //   "image",
        //   "video",
        //   "align",
        //   "color",
        //   "imageResize"
        // ]}
        placeholder="Vui lòng viết nội dung!"
      />
      {/* <div dangerouslySetInnerHTML={{ __html: blog }} /> */}

      {/* <ReactQuill value={blog} readOnly theme={"bubble"} /> */}
    </div>
  );
}
