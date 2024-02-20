'use client';

import IconButton from '@mui/material/IconButton';
import { SIZE, TYPE, VARIANT } from '@util/util';
import Buttons from './Buttons';

export type ButtonProp = {
    type?: TYPE;
    handleOnClick?: () => void;
    handleOnFocus?: () => void;
    handleOnBlur?: () => void;
    isSubmit?: boolean;
    isDisable?: boolean;
    title: string | number;
    styleClass: string;
    size?: SIZE;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    icon?: React.ReactNode;
    variant?: VARIANT;
    children?: React.ReactNode;
    titleClass?: string;
};

export function IconButtons({
    type = 'submit',
    title = '',
    styleClass,
    isDisable,
    icon,
    handleOnClick,
}: ButtonProp) {
    return (
        <Buttons
            type={type}
            styleClass={styleClass}
            title={title}
            handleOnClick={handleOnClick}
            isDisable={isDisable}
        >
            <>
                <IconButton>{icon}</IconButton>
            </>
        </Buttons>
    );
}
