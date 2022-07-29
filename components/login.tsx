import { auth, firestore } from '../lib/firebaseConfig';
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { useContext } from 'react';
import { UserContext } from '../lib/userContext';
import Google from '../public/icons/google.svg';
import { useRouter } from 'next/router';
interface LoginProps {
  type: 'google' | 'facebook' | 'twitter' | 'github' | 'apple';
}
export const Login = ({ type }: LoginProps) => {
  const router = useRouter();
  const { setCurrentUser, currentUser } = useContext(UserContext);
  function SignIn() {
    const gProvider = new GoogleAuthProvider();
    const fProvider = new FacebookAuthProvider();
    signInWithPopup(auth, type === 'google' ? gProvider : fProvider).then(
      async (result) => {
        console.log(result);
        try {
          let data = await getDoc(doc(firestore, 'users', result.user.uid));
          if (data.exists()) {
            setCurrentUser(data.data());
            console.log(data.data());
          } else {
            setCurrentUser(undefined);
            router.push('/signup');
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  }
  return (
    <div className="flex flex-col items-center">
      <button
        className="flex bg-black border-white border-2 text-2xl ring-black ring-2 px-16 py-4 rounded-xl text-white font-black items-center hover:border-black transition-colors"
        onClick={() => SignIn()}
      >
        <Google className="w-10 mr-4" />
        Login with Google
      </button>
    </div>
  );
};
