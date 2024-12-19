import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calendar } from "@/components/ui/calendar"

function App() {
  // const [count, setCount] = useState(0)
  const [date, setDate] = useState<Date | undefined>(new Date())
  // will not need react as useState is already imported and doesn't need reference.

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      // className="rounded-md border"
      className="rounded-md border text-white bg-zinc-800"
    />
  )

}

export default App
