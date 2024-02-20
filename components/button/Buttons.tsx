'use client';
import Button from '@mui/material-next/Button';
import { SIZE, TYPE, VARIANT, sizeMapping } from '@util/util';
import React from 'react';
import { CssVarsProvider } from '@mui/material-next/styles';

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

type CustomButtonProps = ButtonProp & { href?: string };

// eslint-disable-next-line react/display-name
const CustomButton = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    CustomButtonProps
>(
    (
        {
            type = 'button',
            handleOnClick,
            handleOnFocus,
            handleOnBlur,
            isSubmit = false,
            isDisable = false,
            title,
            styleClass,
            size,
            startIcon,
            endIcon,
            icon,
            variant,
            children,
            titleClass,
            href, // Include href in the props
            ...otherProps
        },
        ref,
    ) => {
        const buttonType = isSubmit ? 'submit' : 'button';

        return (
            <CssVarsProvider>
                <Button
                    ref={ref as React.RefObject<HTMLButtonElement>}
                    // component={Component}
                    type={buttonType}
                    className={styleClass}
                    onClick={handleOnClick}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    disabled={isDisable}
                    variant={variant as VARIANT}
                    size={sizeMapping[size as SIZE]}
                    {...otherProps}
                >
                    <span className={titleClass}>{title}</span>
                    {children}
                </Button>
            </CssVarsProvider>
        );
    },
);

export default CustomButton;
