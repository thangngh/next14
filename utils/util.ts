import "dotenv/config"
export const API_URL = process.env.API_URL;

export const MESSAGE_CODE = {
    "FAILED_TO_FETCH_DATA": 'Failed to fetch data',
    "UN_AUTHENTICATED": 'UnAuthenticated'
};

export type SIZE = "small" | "medium" | "large" | "inherit";
export type VARIANT = "elevated" | "text" | "outlined" | "filled" | "filledTonal"
export type TYPE = "submit" | "text" | "password" | "email"
export type TextFieldType = "outlined" | "filled" | "standard"

export const sizeMapping: Record<SIZE, 'small' | 'medium' | 'large'> = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    inherit: 'medium', // Use 'medium' as the default size for 'inherit'
};

