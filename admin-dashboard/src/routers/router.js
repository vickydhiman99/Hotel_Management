import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import AppDrawer from '../components/common/drawer';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import Home from '../pages/home/home';
import Customer from '../pages/customer/customer';
import Table from '../pages/table/table';
import Menu from '../pages/menu/menu';


// import Home from '../Pages/Home/Home'
// import Customer from '../Pages/Customer/Customer';
// import Signup from '../Pages/Auth/signup';
// import Login from '../Pages/Auth/login';


const AppRouter = () => {
    const [selectMenu, setSelectMenu] = useState("")
    return (
        <Router>
            <Routes>
                <Route path='/dashboard' element={
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppDrawer setSelectMenu={setSelectMenu} selectMenu={selectMenu === "" ? "Dashboard" : selectMenu} />
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                        >
                            <Toolbar />
                            <Home />
                        </Box>
                    </Box>
                } />

                <Route path='/customer' element={
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppDrawer setSelectMenu={setSelectMenu} selectMenu={selectMenu === "" ? "Customer" : selectMenu} />
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                        >
                            <Toolbar />
                            <Customer />
                        </Box>
                    </Box>
                } />

                <Route path='/table' element={
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppDrawer setSelectMenu={setSelectMenu} selectMenu={selectMenu === "" ? "Customer" : selectMenu} />
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                        >
                            <Toolbar />
                            <Table />
                        </Box>
                    </Box>
                } />

                <Route path='/menu' element={
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppDrawer setSelectMenu={setSelectMenu} selectMenu={selectMenu === "" ? "Customer" : selectMenu} />
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                        >
                            <Toolbar />
                            <Menu />
                        </Box>
                    </Box>
                } />

                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
