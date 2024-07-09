import  { createContext, useContext, useState } from 'react'
import Content from './Content'

const UserContext = createContext()

 const UserProvider = ({children}) => {
  const [user] = useState({
    name: "Jeremiah",
    email: "jegbune@example.com",
    dob: '01/01/2000'
  })
  return <UserContext.Provider value={user}><Content/></UserContext.Provider>
  

}

export default UserProvider
export const useUser = () => useContext(UserContext)
