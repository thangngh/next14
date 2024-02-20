'use client';
import CustomForm from '@component/form/Forms';
import CustomInput from '@component/form/Inputs';
import { useFormHook } from '@hooks/useForm';
import { PageParam } from '@interface/constraint.interface';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const inputConfigs = [
    {
        name: 'username or email',
        placeholder: 'Please input username or email',
        type: 'text',
        validationSchema: yup.string().required('Username is required'),
        styleClass: `block w-full py-3 px-1 mt-2
        text-gray-800 appearance-none
        border-b-2 border-gray-100
        focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-sm`,
    },
    {
        name: 'email',
        placeholder: 'Email',
        type: 'email',
        validationSchema: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        styleClass: `block w-full py-3 px-1 mt-2 
            text-gray-800 appearance-none 
            border-b-2 border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-sm`,
    },
];

export function Form({ params, searchParams }: PageParam) {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('Form Data:', data); // Log the data here
    };
    return (
        <div className="p-2 space-y-2">
            <CustomForm inputConfigs={inputConfigs} onSubmit={onSubmit} />
        </div>
    );
}
