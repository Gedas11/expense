import firebase from "../firebase";
import { app } from "../firebase";

const auth = app.auth();
const db = app.firestore();

const register = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailPassword(email, password); // sukuriamas vartotojas google cloud
    const user = res.user; //pasiimam sukurta vartotojo duomies
    await db.collection("users").add({
      //pridedam mums reikalingus user duomenis i savo firestore db
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (email, password) => {
    try{
      await auth.signInWithEmailAndPassword(email.password)
    }catch (err) {
        console.log(err)
    }
    
}

export default firebase;
export { auth, db, register, login };
