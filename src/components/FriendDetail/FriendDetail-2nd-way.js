import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './Friend.css';
//snackbar-material-ui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// card material-ui
import { Box } from '@mui/system';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { deepOrange } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

// snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FriendDetail = () => {

    /* snackbar starts */

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (details.id === parseFloat(friendId)) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }


    /* snackbar ends */

    let { friendId } = useParams();
    const history = useHistory();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const ENDPOINT = `users`;
        const URL = `https://jsonplaceholder.typicode.com/${ENDPOINT}/${friendId}`;
        fetch(URL).then(res => res.json().then(data => setDetails(data))).catch(err => console.error(err))
    }, [friendId]);

    const handleAllDetailClick = () => {
        history.push(`/friends`);
    }

    return (
        <div className="nav-margin">
            <h3>Friend Detail of {details.name}</h3>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        bgcolor: '#3f51b5',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: 'rgba(0, 0, 0, 0.3) 2px 4px 8px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        width: { xs: '100%', md: '50%' },
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            objectFit: 'cover',
                            height: 233,
                            width: 350,
                            maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src={"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', md: 'flex-start' },
                            m: 3,
                            minWidth: { md: 350 },
                        }}
                    >
                        <Box component="span" sx={{ fontSize: 16, mt: 1, color: '#ffd54f' }}>
                            <p>Id: {friendId}</p>

                            <div style={{ display: 'flex' }}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
                                <span style={{ paddingLeft: '10px' }}>{details?.name}</span>
                            </div>

                        </Box>
                        <Box component="span" sx={{ color: 'white', fontSize: 18 }}>
                            {details?.email}
                        </Box>
                        <Box
                            sx={{
                                mt: 1.5,
                                p: 0.5,
                                boxShadow: 'rgba(0, 0, 0, 0.3) 2px 4px 8px',
                                backgroundColor: '#2196f3',
                                borderRadius: '5px',
                                color: 'white',
                                fontWeight: 'medium',
                                display: 'flex',
                                fontSize: 12,
                                alignItems: 'center',
                                '& svg': {
                                    fontSize: 21,
                                    mr: 0.5,
                                },
                            }}
                        >
                            <ErrorOutlineIcon />
                            {details?.website}
                        </Box>
                    </Box>
                </Box>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} sx={{ width: '50%', backgroundColor: '#b6ffff', color: '#1976d2' }}>
                    <Button variant="outlined" onClick={handleClick}>
                        Check User Validity
                    </Button>
                    <Button onClick={handleAllDetailClick} variant="contained">See All Friends Details</Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                            User exists!
                        </Alert>
                    </Snackbar>
                </Stack>
            </div>

        </div >
    );
};

export default FriendDetail;