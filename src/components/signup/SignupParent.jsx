import {
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from '../../firebase-auth/firebase';
import { SignupForm } from "./SignupForm";
import { Redirect, useHistory } from "react-router-dom"


export const SignupParent = () => {
    const history = useHistory();
    const googleProvider = new GoogleAuthProvider();
    const googleSignup = async () => {
        await signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential?.accessToken;
                const user = result.user;
               
                let { email } = user.reloadUserInfo
                if (email) {
                    history.push("/dash_board")
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    let data = localStorage.getItem("token");
    data = JSON.parse(data);

    if (data) {
        return <Redirect to="/dash_board" push={true} />
    }

    return (
        <>
            <SignupForm signupgoogle={googleSignup} />
        </>
    )
}