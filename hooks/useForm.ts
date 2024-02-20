
import { InputConfig } from "@component/form/Forms";
import { FieldErrors, FieldValues, Resolver, UseFormReturn, useForm } from "react-hook-form";
import * as yup from 'yup'

export type ValidationSchema<T extends FieldValues = FieldValues> = {
    [key in keyof T]: yup.StringSchema<string | undefined>;
};

export type objectSchema<T extends FieldValues = FieldValues> = yup.ObjectSchema<ValidationSchema<T> | {}>;

export type keySchema<T extends FieldValues = FieldValues> = yup.StringSchema<string | undefined>;

export type FormData<T extends FieldValues = FieldValues> = {
    [key in keyof T]: string;
};

export const generateResolver =
    <FormData extends FieldValues>(inputConfigs: InputConfig[]): Resolver<FormData> =>
        async (values) => {
            const validationSchema: ValidationSchema = {};

            inputConfigs.forEach((config) => {
                validationSchema[config.name] =
                    config.validationSchema as yup.StringSchema<string | undefined>;
            });
            const schema: objectSchema = yup.object().shape(validationSchema);
            try {
                await schema.validate(values, { abortEarly: false });

                return { values, errors: {} };
            }
            catch (validationError) {

                const errors: FieldErrors<FormData> = {};

                if (validationError instanceof yup.ValidationError) {
                    validationError.inner.forEach((error) => {
                        const path = error.path as keyof FormData;
                        const fieldError: { type: string; message: string } = {
                            type: error.type ?? 'validation',
                            message: error.message ?? 'Validation error',
                        };

                        errors[path] = fieldError as FieldErrors<FormData>[keyof FormData];
                    });
                }

                return { values: {}, errors } as any; // Type assertion to FieldErrors<FormData>
            }
        };

interface useFormProps<FormData extends FieldValues = FieldValues> {
    inputConfigs: InputConfig[];
};

export const useFormHook =
    <FormData extends FieldValues>
        ({ inputConfigs }: useFormProps<FormData>): UseFormReturn<FormData, any, undefined> => {

        return useForm<FormData>({
            resolver: generateResolver<FormData>(inputConfigs),
        });

    }