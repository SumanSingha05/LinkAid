import React from 'react'
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from '../config/firebase'
import { useState } from 'react';
const FileUpload = () => {
  //Handling file upload
  //Upload files
  const [fileUpload, setFileUpload] = useState([])
  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`)
    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (err) {
      console.error(err)
    }
  };

  return (

    <div>
      <input className='ml-20' type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
      <button className='border-black border-2 border-solid ml-32 mt-4 mb-2 p-2 pl-4 pr-4 rounded-full bg-[#413176] text-[#ffffff] border-none ' onClick={uploadFile}>Upload File</button>
    </div>
  )
}

export default FileUpload
