import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

export const InputImage = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    // <section className=" p-2 border-dashed border-2 border-zinc-400 rounded-md w-full py-2 ">
    <>
      {files.length !== 0 ? (
        <>
          <div className=" mx-auto w-fit p-2 border-2 border-zinc-200">
            <img src={files[0]?.preview} className="w-28 h-28 object-cover" />
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={() => setFiles([])}
              className=" bg-red-500 p-1 text-white rounded-md mx-auto"
            >
              Eliminar
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            {...getRootProps({ className: "dropzone" })}
            className="flex flex-col items-center gap-1 p-2 border-dashed border-2 border-zinc-400 rounded-md w-full py-2"
          >
            <input {...getInputProps()} />
            <BsFillCloudArrowUpFill size="3em" className=" text-zinc-600" />
            <p className=" text-zinc-600 text-lg">
              Arrastra un archivo o haz click para buscar
            </p>
          </div>
        </>
      )}
      {/* </section> */}
    </>
  );
};
