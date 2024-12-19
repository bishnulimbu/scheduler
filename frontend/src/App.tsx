import { useState } from 'react'
import './App.css'
import { Calendar } from "@/components/ui/calendar"
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
import Layout from './Layout';

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  // will not need react as useState is already imported and doesn't need reference.



  return (
    <>
      {/* <SidebarProvider> */}
      {/*   <AppSidebar /> */}
      {/*   <main> */}
      {/*     <SidebarTrigger /> */}
      {/*   </main> */}
      {/* </SidebarProvider> */}
      <Layout>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        // className="rounded-md border text-white bg-zinc-800"
        />
      </Layout>
    </>
  )

}

export default App
