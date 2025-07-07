import React, { useState } from 'react'
import axios from 'axios'

const UploadForm = () => {
  const [file, setFile] = useState(null)

  const submit = async e => {
    e.preventDefault()
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    await axios.post('/api/upload', formData)
    alert('Uploaded')
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button className="bg-teal text-white p-2" type="submit">Upload</button>
    </form>
  )
}

export default UploadForm
