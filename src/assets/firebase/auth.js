import {auth} from "./firebase.jsx";
import {createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'


export const doCreateUserWithEmailAndPassword = async (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
export const doSignInWithEmailAndPassword = async (email,password) =>{
    await signInWithEmailAndPassword(auth, email, password);
}
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    //result.user
    return result;
}

export const doSignOut =() => {
    return auth.signOut();
}

