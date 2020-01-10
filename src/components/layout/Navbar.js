


import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className="fas fa-code" /> Dev Connector
                       </Link>
            </h1>
            <a href="!#">Developers</a>
            <Link to='/login'> LogIn</Link>
            <Link to='/register'> Register</Link>

        </nav>
    )
}

export default Navbar;

































// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;


//     return (
//         <Typography
//             component="div"
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && <Box p={3}>{children}</Box>}

//         </Typography>
//     );
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,

//     }
// }

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

// export default function SimpleTabs() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <div className={classes.root}>
//             <AppBar position="static">
//                 <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//                     <Tab label="Login" {...a11yProps(0)} />
//                     <Tab label="register" {...a11yProps(1)} />
//                     <Tab label="signup" {...a11yProps(2)} />
//                 </Tabs>
//             </AppBar>

//             <TabPanel value={value} index={0} href='#login'>
//                 Login
//                     </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Register
//                     </TabPanel>
//             <TabPanel value={value} index={2}>
//                 Signup
//                     </TabPanel>

//         </div>
//     )
// };

