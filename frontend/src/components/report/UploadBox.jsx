import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

function UploadBox({ selectedFile, setSelectedFile }) {

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  }, [setSelectedFile]);

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"]
    }
  });

  return (
    <div
      {...getRootProps()}
      className={`upload-box ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />

      <FaCloudUploadAlt
        size={70}
        color="#2563eb"
      />

      <h2>Drag & Drop your Medical Report</h2>

      <p>
        PDF, JPG or PNG
      </p>

      <button
        type="button"
        className="browse-btn"
      >
        Browse Files
      </button>

      {
        selectedFile &&
        <div className="selected-file">
            📄 {selectedFile.name}
        </div>
      }

    </div>
  );
}

export default UploadBox;