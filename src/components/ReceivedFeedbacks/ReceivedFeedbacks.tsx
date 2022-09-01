import axios from "axios"
import { useEffect, useState } from "react"

export function ReceivedFeedbacks() {

  const [feedback, setFeedback] = useState([])

  const getFeedbacks = async () => {
    axios.get('http://localhost:3333/feedback')
      .then((res) => {
        if (res.status == 200)
          setFeedback(res.data)
      })
  }

  useEffect(() => {
    getFeedbacks()
  }, [])

  return (
    <div>
      {JSON.stringify(feedback)}
    </div>
  )
}