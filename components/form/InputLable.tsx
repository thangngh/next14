'use client';

import { PropLayout } from '@interface/constraint.interface';
import { InputLabel } from '@mui/material';
import React from 'react';

interface InputLabelProps extends PropLayout {
    htmlFor: string;
    forwardedRef?: React.Ref<HTMLElement>;
}

const FormInputLabel: React.FC<InputLabelProps> = ({
    children,
    htmlFor,
    forwardedRef,
    ...rest
}) => {
    return (
        <InputLabel htmlFor={htmlFor} {...rest}>
            {children}
        </InputLabel>
    );
};

const CustomInputLabel: React.FC<InputLabelProps> = React.forwardRef<
    HTMLElement,
    InputLabelProps
>((props, ref) => <FormInputLabel {...props} forwardedRef={ref} />);

export default CustomInputLabel;
