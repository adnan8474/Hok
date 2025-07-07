import React, { useState } from 'react'
import axios from 'axios'

const ChatBox = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const submit = async () => {
    const res = await axios.post('/api/ask', { question })
    setAnswer(res.data.answer)
  }

  return (
    <div>
      <textarea
        className="w-full p-2 text-black"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <button className="bg-teal text-white p-2 mt-2" onClick={submit}>
        Ask
      </button>
      {answer && (
        <div className="mt-4 p-2 bg-gray-800">{answer}</div>
      )}
    </div>
  )
}

export default ChatBox
