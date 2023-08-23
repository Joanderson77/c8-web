import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"


interface IMenuLateralProps {
    children: React.ReactNode
}
export const MenuLateral: React.FC<IMenuLateralProps>= ({ children }) => {
    const theme = useTheme();

    return (
        <>
        <Drawer variant='permanent'>
            <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

            <Box width= "100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt="Remy Sharp" 
            src="data:image/png;base64,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" />
            </Box>

            <Divider/>

            <Box flex={1}>
            <List component="nav">
            <ListItemButton>
            <ListItemIcon>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText primary="Página inicial" />
                
            </ListItemButton>
                
            </List>

            </Box>

            </Box>
        </Drawer>
        <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
        </Box>
        </>
    );
};