import styles from "./LoginForm.module.css"
import Link from 'next/link'

import {useState} from "react"

export default function LoginForm({destination}) {
  const [email, setEmail] = useState("")

  function updateEmail(evnt) {
    setEmail(evnt.target.value)
  }

  return (
  <div className={styles.loginBlock}>    
      <h2 className={styles.loginTitle}>Login Page</h2>
      <div className={styles.login}>    
      <form id="login" method="get" action={destination}>    
          <label><b>User Name</b></label>    
          <input type="text" name="Uname" id="Uname" placeholder="Username" onKeyUp={updateEmail}/>    
          <br /><br/>    
          <label><b>Password</b></label>    
          <input type="Password" name="Pass" id="Pass" placeholder="Password" />    
          <br /><br/>    
          <Link href={{
            pathname: "/logged-in",
            query: {Uname: email}}} ><a>Log In Here</a></Link>
      </form>     
    </div>    
    </div>
  );
}
