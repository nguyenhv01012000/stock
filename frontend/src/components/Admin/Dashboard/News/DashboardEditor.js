
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateFromHTML } from 'draft-js-import-html'
import { EditorState, ContentState, convertToRaw, convertFromHTML, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from 'axios'
import { BACKEND } from "../../../../env";

function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open('POST', BACKEND + `/news/upload-image`);
      xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
      const data = new FormData(); // eslint-disable-line no-undef
      data.append('newImg', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(JSON.stringify({
          "data": {
            "id": "orunSTu",
            "title": null,
            "description": null,
            "datetime": 1495556889,
            "type": "image/gif",
            "animated": false,
            "width": 1,
            "height": 1,
            "size": 42,
            "views": 0,
            "bandwidth": 0,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": null,
            "account_id": 0,
            "is_ad": false,
            "in_most_viral": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "in_gallery": false,
            "deletehash": "x70po4w7BVvSUzZ",
            "name": "",
            "link": xhr.responseText
          },
          "success": true,
          "status": 200
        }));
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    },
  );
}
export default function DashboardEditor(props) {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isLoad, setIsLoad] = useState(false);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
    props.setNewsContent(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
    setIsLoad(true);
  }

  useEffect(() => {
    if (props.newsContent && !isLoad) {
      let test = EditorState.createWithContent(convertFromRaw(JSON.parse(props.newsContent)))
      setEditorState(test);
    }
  }, [props.newsContent]);

  useEffect(() => {
    setIsLoad(() => false);
  }, []);

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName={props.small ? "demo-wrapper-small" : "demo-wrapper"}
        editorClassName={props.small ? "demo-editor-small" : "demo-editor"}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: {previewImage: true, uploadCallback: uploadImageCallBack, alt: { present: false, mandatory: false }, defaultSize: { height: '500', width: '800',}},
        }}
      />
    </div>
  )
}