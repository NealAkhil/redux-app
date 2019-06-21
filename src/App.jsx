import React from 'react'
import Profile from './components/Profile'

//importing store

export default function App() {
  // const state= store.getState();
  return (
    <div>
      <Profile />
      {/* <ButtonGrp amounts={[1000, 200]} methods={["WITHDRAW", "DEPOSIT"]}/> */}
    </div>
  )
}
