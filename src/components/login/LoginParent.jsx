import {
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from '../../firebase-auth/firebase';
import { LoginForm } from "./LoginForm"
import { useHistory, Redirect } from "react-router-dom"

export const LoginParent = () => {
    const history = useHistory();
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        await signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
                // console.log(user.reloadUserInfo)

                let { email } = user.reloadUserInfo;
                if (email) {
                    history.push("/")
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
            <LoginForm logingoogle={googleLogin} />
        </>
    )
}