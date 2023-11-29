import { Avatar } from "@mui/material";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

interface UserProps {
  displayName: string | null;
  photoURL: string | null;
}

function UserInfo({ displayName, photoURL }: UserProps) {
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <b>Witaj, {displayName}</b>
        {photoURL ? <Avatar src={photoURL} /> : <Avatar>A</Avatar>}
      </div>
      <button onClick={() => signOut(auth)} className="google-btn">
        Wyloguj się
      </button>
    </div>
  );
}

export default UserInfo;
