import React, { useContext } from "react"
import { UserContext, useUser } from "./UserContext"

const Page = () => {
  const user = useUser()
    return( 
      <div>
        <h2>What is Lorem ipsum?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod temper incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullance laboris nisi ut aliquip ex ea commodo consequat. Duis aut irure dolor in reprehenderit in volunptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat culpidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
        </p>
        <p>Written by {user.name} </p>
      </div>
    )
  }
  export default Page