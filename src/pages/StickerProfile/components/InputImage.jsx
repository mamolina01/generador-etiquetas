import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FcAddImage } from "react-icons/fc";

export const InputImage = ({ onFileInputChange, logo }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      onFileInputChange(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
    maxFiles: 1,
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => URL.revokeObjectURL(logo?.preview);
  }, []);

  return (
    // <section className=" p-2 border-dashed border-2 border-zinc-400 rounded-md w-full py-2 ">
    <>
      {logo ? (
        <>
          <div className="w-fit mx-auto flex flex-col justify-center gap-2">
            <div className=" mx-auto w-fit p-1 border-2 border-zinc-200">
              <img
                src={logo?.preview ? logo?.preview : logo}
                className="w-28 h-28 object-cover"
              />
            </div>
            <p
              onClick={() => onFileInputChange("")}
              className="w-full text-center bg-red-500 p-1 text-white rounded-sm mx-auto cursor-pointer"
            >
              Eliminar
            </p>
          </div>
        </>
      ) : (
        <>
          <div
            {...getRootProps({ className: "dropzone" })}
            className="flex flex-col items-center gap-1 p-2 border-dashed border-2 border-zinc-400 rounded-md w-full py-2 cursor-pointer"
          >
            <input {...getInputProps()} />
            <FcAddImage size="6em" />
            <p className=" text-zinc-600 text-lg text-center">
              Arrastra un archivo o haz click para buscar
            </p>
          </div>
        </>
      )}
      {/* </section> */}
    </>
  );
};

