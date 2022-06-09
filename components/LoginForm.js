import styles from './LoginForm.module.css'

export default function LoginForm({destination}) {
  return (
  <div className={styles.loginBlock}>    
      <h2 className={styles.loginTitle}>Login Page</h2>
      <div className={styles.login}>    
      <form id="login" method="get" action={destination}>    
          <label><b>User Name</b></label>    
          <input type="text" name="Uname" id="Uname" placeholder="Username" />    
          <br /><br/>    
          <label><b>Password</b></label>    
          <input type="Password" name="Pass" id="Pass" placeholder="Password" />    
          <br /><br/>    
          <input type="submit" name="log" id="log" value="Log In Here" />       
      </form>     
    </div>    
    </div>
  );
}
