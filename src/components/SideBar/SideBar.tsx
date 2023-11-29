import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import EyeIcon from "@mui/icons-material/Visibility";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../SignIn";
import { auth, db } from "../../Firebase";
import UserInfo from "../UserInfo";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Props {
  setCategoryID: (categoryID: string | null) => void;
}

function SideBar({ setCategoryID }: Props) {
  const [user] = useAuthState(auth);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    await getDocs(collection(db, "categories")).then((querySnapchot) => {
      const newData: any = querySnapchot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setCategories(newData);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCategoryID(null)}>
            <ListItemIcon>
              <HomeIcon sx={{ color: "#bc063a" }} />
            </ListItemIcon>
            <ListItemText primary="Strona Głowna" />
          </ListItemButton>
        </ListItem>

        {categories.map((category) => (
          <ListItem disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => setCategoryID(category["id"])}>
              <ListItemIcon>
                <EyeIcon />
              </ListItemIcon>
              <ListItemText primary={category["name"]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {user ? <UserInfo displayName={user.displayName} photoURL={user.photoURL} /> : <SignIn />}
      </div>
    </>
  );
}

export default SideBar;
