'use client';

import { Backdrop, CircularProgress } from '@mui/material';

interface overlapProp {
    loading: boolean;
}

export function Overlap({ loading }: overlapProp) {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
