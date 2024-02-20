'use client';
import React from 'react';

import { TYPE } from '@util/util';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ErrorMessage } from './Error';
import { TextField } from '@mui/material';

interface FormInputTextProps {
    name: string;
    placeholder: string;
    type: TYPE;
    isError?: boolean;
    isDisabled: boolean;
    styleClass: string;
    startIcon?: React.ReactNode;
    errorMessage?:
        | string
        | FieldError
        | Merge<FieldError, FieldErrorsImpl<any>>
        | undefined;
    forwardedRef?: React.Ref<HTMLInputElement>;
}

const FormInputText: React.FC<FormInputTextProps> = ({
    name,
    placeholder,
    type,
    isError,
    errorMessage,
    styleClass,
    isDisabled,
    forwardedRef,
    ...rest
}) => {
    return (
        <>
            <TextField
                {...rest}
                error={isError}
                placeholder={placeholder}
                // label={name}
                // helperText={errorMessage as string}
                disabled={isDisabled}
                type={type}
                name={name}
                className={styleClass}
                ref={forwardedRef}
            />
            <ErrorMessage
                isError={isError as boolean}
                message={errorMessage as string}
            />
        </>
    );
};

const CustomInput: React.FC<FormInputTextProps> = React.forwardRef<
    HTMLInputElement,
    FormInputTextProps
>((props, ref) => <FormInputText {...props} forwardedRef={ref} />);

export default CustomInput;
