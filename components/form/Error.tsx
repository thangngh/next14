'use client';

interface ErrorMessageProp {
    isError: boolean;
    message: string;
}

export function ErrorMessage({ isError, message }: ErrorMessageProp) {
    return isError && <span className="text-red-500 text-sm">{message}</span>;
}
