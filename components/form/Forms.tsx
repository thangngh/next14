'use client';
import React, { forwardRef } from 'react';
import { SubmitHandler, FieldValues, Controller } from 'react-hook-form';
import CustomInput from './Inputs';
import CustomButton from '@component/button/Buttons';
import { TYPE } from '@util/util';
import { keySchema, useFormHook } from '@hooks/useForm';
import { Box } from '@mui/material';

export interface InputConfig {
    name: string;
    placeholder: string;
    styleClass?: string;
    type: string;
    validationSchema?: keySchema;
}

interface CustomFormProps<T extends FieldValues = FieldValues> {
    onSubmit: SubmitHandler<T>;
    inputConfigs: InputConfig[];
}

// eslint-disable-next-line react/display-name
const CustomForm = forwardRef<HTMLFormElement, CustomFormProps>(
    ({ onSubmit, inputConfigs }, ref) => {
        const {
            control,
            handleSubmit,
            formState: { errors },
        } = useFormHook({ inputConfigs });
        return (
            <form
                ref={ref}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-2"
            >
                {inputConfigs.map((el, idx) => (
                    <Controller
                        key={idx}
                        name={el.name}
                        control={control}
                        render={({ field }) => (
                            <Box>
                                <label htmlFor={el.name}>
                                    {el.name.toLocaleUpperCase()}
                                </label>
                                <CustomInput
                                    isError={Boolean(errors?.[el.name])}
                                    errorMessage={errors?.[el.name]?.message}
                                    type={el.type as TYPE}
                                    placeholder={el.placeholder}
                                    isDisabled={false}
                                    styleClass={el.styleClass as string}
                                    {...field}
                                />
                            </Box>
                        )}
                    />
                ))}
                <CustomButton
                    handleOnClick={handleSubmit(onSubmit)}
                    isDisable={false}
                    type="submit"
                    title={'Submit'}
                    styleClass={`w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none`}
                    variant="outlined"
                />
            </form>
        );
    },
);

export default CustomForm;
