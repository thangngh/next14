/** @type {import('next').NextConfig} */

// export default function cloudinaryLoader({ src, width, quality }) {
//     const params = [
//         'f_auto',
//         'c_limit',
//         `w_${width}`,
//         `q_${quality || 'auto'}`,
//     ];
//     return `https://example.com/${params.join(',')}${src}`;
// }

const nextConfig = {
    i18n: {
        locales: ['en-Us', 'vn'],
        defaultLocale: 'en-Us',
        // domains: [
        //     {
        //         domain: 'localhost:3000',
        //         defaultLocale: 'en-US',
        //     },
        // ],
    },
};

module.exports = nextConfig;
