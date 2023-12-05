
import {Auth,provider} from "../../confic/firebase"
import { signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom"


export  const AuthComponet = () => {
  const Navigate = useNavigate()
  const singInWithGoogle=async()=>{
    try {
      const results = await signInWithPopup(Auth,provider)
      console.log(results);
      const authinfo = {
        userId: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth:true

      }
      localStorage.setItem("auth",JSON.stringify(authinfo) )
      Navigate("/expensetracker")
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="login-page">
      <p>Sign in WIth google to Continue </p>
      <button className="login-with-google-btn" 
      onClick={singInWithGoogle}>Sign in With Google</button>
    </div>
  )
}

