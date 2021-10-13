import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import firebaseInitialization from "../Firebase/firebase.initialize";

firebaseInitialization();

const useFirebase=()=>{
    const [user,setUser]= useState({});
    const [isloading,setloading]=useState(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
     
    // sign in
    const signInUsingGoogle=()=>{
        setloading(true)
       return signInWithPopup(auth, provider)
      
    }

    // logout
    const sigout=()=>{
        setloading(true)
        signOut(auth).then(()=>{
            setUser({});
        })
        .finally(()=>setloading(false))

    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            setloading(false)
        })

    },[])

    return{
        user,
        signInUsingGoogle,
        sigout,
        setloading,
        isloading
        
    }


}

export default useFirebase