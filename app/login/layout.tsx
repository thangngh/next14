import { PropLayout } from '@interface/constraint.interface';
import { Metadata } from 'next';
import Container from '@mui/material/Container';

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginLayout({ children }: PropLayout) {
    return (
        <div className="flex flex-col h-screen ">
            <div className="flex flex-grow justify-center  flex-col p-4 transition-all duration-150 ease-in ml-0">
                {children}
            </div>
        </div>
    );
}
