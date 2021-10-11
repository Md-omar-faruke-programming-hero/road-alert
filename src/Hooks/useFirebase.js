import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import firebaseInitialization from "../Firebase/firebase.initialize";

firebaseInitialization();

const useFirebase=()=>{
    const [user,setUser]= useState({});

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
     
    // sign in
    const signInUsingGoogle=()=>{
       return signInWithPopup(auth, provider)
      
    }

    // logout
    const sigout=()=>{
        signOut(auth).then(()=>{
            setUser({});
        })

    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
        })

    },[])

    return{
        user,
        signInUsingGoogle,
        sigout
        
    }


}

export default useFirebase