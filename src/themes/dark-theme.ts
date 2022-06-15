import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default:"#0E0E0E"
        },
        primary:{
            main:"#333333"
        },
        secondary:{
            main:"#212121"
        },
    },
    components:{
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor: "#212121"
                }
            }
        }
    }
})