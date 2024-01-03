import './App.css'
import { Landing } from './components/Landing'
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';
import { getAuth , onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAjjsbl9eSDWSmfrWpFPap2uGuwONZ2N4g",
  authDomain: "leetcode-clone-c39eb.firebaseapp.com",
  projectId: "leetcode-clone-c39eb",
  storageBucket: "leetcode-clone-c39eb.appspot.com",
  messagingSenderId: "66814187798",
  appId: "1:66814187798:web:a6b3702e191448722dd837",
  measurementId: "G-ET5FNB5WCN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
function App() {
  useEffect(() => {
    onAuthStateChanged(auth, function(user) {
      if (user) {
        console.log('This is the user: ', user)
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  }, [])
  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  )
}

export default App
