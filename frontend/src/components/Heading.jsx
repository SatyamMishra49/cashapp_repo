import * as React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../assets/CashApp.svg';

function Heading() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingX: 3,
                paddingTop: 3,
                paddingBottom: 1,
                backgroundColor: '#ffffff',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                }}
            >
                <img
                    src={logo}
                    alt="ininal logo"
                    style={{ width: 60, height: 70 }}
                />
            </Box>
            <Typography
                variant="body-1"
                sx={{
                    color: 'text.secondary',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                It’s more than banking. It’s Cash App.
            </Typography>
        </Box>
    );
}

export default Heading;
