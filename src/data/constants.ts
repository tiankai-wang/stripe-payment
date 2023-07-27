import { Platform } from "react-native";

export const PRODUCTS_LIST: Product[] = [
    {
        id: '1',
        name: 'APPLE iPhone 14 (Blue, 128 GB)',
        imageUrl: 'https://rukminim1.flixcart.com/image/300/400/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg',
        price: 799,
    },
    {
        id: '2',
        name: 'APPLE iPhone 14 (Starlight, 256 GB)',
        imageUrl: 'https://rukminim1.flixcart.com/image/300/400/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg',
        price: 899,
    },
    {
        id: '3',
        name: 'APPLE iPhone 14 (Purple, 128 GB)',
        imageUrl: 'https://rukminim1.flixcart.com/image/300/400/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg',
        price: 799,
    },
    {
        id: '4',
        name: 'APPLE iPhone 11 (White, 64 GB)',
        imageUrl: 'https://rukminim1.flixcart.com/image/300/400/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg',
        price: 439,
    },
];

export const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:4242' : 'http://localhost:4242';
export const publishableKey  = 'pk_test_51LXxrfBGpm7Cu8Cy74DfYsgL4JA4NOQoAotrKSonAqirsHnk3RrvHj2uNEWo83woNkXgvtuy2nKXLWxutEaVOTtM00cR6dO4Qh'