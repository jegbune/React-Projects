import React, {useContext} from 'react'
import { AuthContext } from './Login'


function Dashboard() {
  const data = useContext(AuthContext)
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

export default Dashboard
