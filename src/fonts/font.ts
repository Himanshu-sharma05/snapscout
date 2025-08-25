import { Inter } from "next/font/google"
const inter = Inter({
      subsets: ['latin'], // Specify the necessary font subsets
      display: 'swap',   // Recommended for performance
    });
  import { Bungee_Tint } from 'next/font/google';

    const bungeeTint = Bungee_Tint({
      subsets: ['latin'], // Specify the required subsets
      weight: '400', // Specify the desired weight(s)
      // display: 'swap', // Optional: control font loading behavior
    });

import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400", // Only one weight is available for Pacifico
});

import { Roboto } from 'next/font/google';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // you can include other weights too
  variable: '--font-roboto', // optional, for using as a CSS variable
});



import { DynaPuff } from 'next/font/google';

const dynapuff = DynaPuff({
  subsets: ['latin'], // Or other subsets if needed
  // weight: ['400'], // Specify weights if Dynapuff has multiple options
});

export {inter,bungeeTint,pacifico,roboto,dynapuff}