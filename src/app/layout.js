import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from './Header.js';
import Box from '@mui/system/Box';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Axa Pickering",
  description: "My personal site/portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#4A294A] ${inter.className}`}>
        <AppRouterCacheProvider>
          <Box height={'10vh'}>
          <Header />
          </Box>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
