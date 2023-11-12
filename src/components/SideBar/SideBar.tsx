import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home'
import Divider from "@mui/material/Divider";
import HistoryIcon from '@mui/icons-material/HistoryEdu'
import SchoolIcon from '@mui/icons-material/School'
import BookIcon from '@mui/icons-material/LibraryBooks'
import EyeIcon from '@mui/icons-material/Visibility'
//#880035

interface Props {
    handleQuizSelect: (targetUrl: string | null) => void;
}

function SideBar({handleQuizSelect} : Props) {
    return (
        <>
            <List>

                <ListItem disablePadding>
                    <ListItemButton onClick={ () => handleQuizSelect(null) }>
                        <ListItemIcon>
                            <HomeIcon sx={{color: "#bc063a"}}/>  
                        </ListItemIcon>
                        <ListItemText primary="Strona Głowna"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{pl: 4}} onClick={ () => handleQuizSelect('https://api-generator.retool.com/tNeRee/realioznawstwo') }>
                        <ListItemIcon>
                            <EyeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Realioznawstwo"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{pl: 4}} onClick={ () => handleQuizSelect('https://retoolapi.dev/UG94K6/historia') }>
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Historia"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{pl: 4}} onClick={ () => handleQuizSelect('https://retoolapi.dev/pHECYg/literatura') }>
                        <ListItemIcon>
                            <BookIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Literatura"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{pl: 4}} onClick={ () => handleQuizSelect('https://quiz2-fe354-default-rtdb.europe-west1.firebasedatabase.app/kultura.json') }>
                        <ListItemIcon>
                            <SchoolIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Kultura"/>
                    </ListItemButton>
                </ListItem>

            </List>
            <Divider/>
        </>
    );
}

export default SideBar;