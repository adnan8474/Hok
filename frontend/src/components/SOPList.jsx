import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SOPList = () => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    axios.get('/api/docs').then(res => setFiles(res.data.files))
  }, [])

  return (
    <ul className="list-disc ml-4">
      {files.map(f => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  )
}

export default SOPList
