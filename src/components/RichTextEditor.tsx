import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

interface props {
  defultHTml: string;
}

const RichTextEditor = ({ defultHTml }: props) => {
  return (
    <div className="App">
      <div className="App-header">MS Text Editor Example</div>
      <SunEditor
        autoFocus={true}
        defaultValue={defultHTml}
        height="75vh"
        setOptions={{
          buttonList: [
            ["undo", "redo", "font", "fontSize", "formatBlock"],
            ["bold", "underline", "italic", "strike", "subscript", "superscript", "removeFormat"],
            ["fontColor", "hiliteColor", "outdent", "indent", "align", "horizontalRule", "list", "table"],
            ["link", "image", "video", "fullScreen", "showBlocks", "codeView", "preview", "print", "save"],
          ],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
