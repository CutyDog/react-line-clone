import { Button } from "@mui/material";
import { auth } from '../firebase';

function SignOut() {
  return (
    <div className="header">
      <Button
        onClick={ () => {auth.signOut()} }
        style={{ color: "white", fontSize: "15px" }}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser?.displayName}</h3>
    </div>
  );
}

export default SignOut;
