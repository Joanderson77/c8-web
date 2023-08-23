import {Routes, Route, Navigate} from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';
import { useDrawerContext } from '../shared/contexts/DrawerContext';

export const AppRoutes = () =>{
    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen } = useDrawerContext();

    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Mudar de cor</Button>}/>
            <Route path='/pagina-inicial' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Mostrar menu</Button>}/>

            <Route path='*' element={<Navigate to='/pagina-inicial' />} />
        </Routes>
    )
}