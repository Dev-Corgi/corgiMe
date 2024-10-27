import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import SmoothScrollWrapper from "./UtilComponents/SmoothScrollWrapper";
import Navigation from "./Components/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const images = [
  '../../public/Assets/Images/Image/booksight_1.png',
  '../../public/Assets/Images/Image/booksight_2.png',
  '../../public/Assets/Images/Image/booksight_3.png',
  '../../public/Assets/Images/Image/booksight_4.png',
  '../../public/Assets/Images/Image/booksight_thumb.png',

  '../../public/Assets/Images/Image/damatcon_1.png',
  '../../public/Assets/Images/Image/damatcon_2.png',
  '../../public/Assets/Images/Image/damatcon_3.png',
  '../../public/Assets/Images/Image/damatcon_4.png',
  '../../public/Assets/Images/Image/damatcon_thumb.png',

  '../../public/Assets/Images/Image/messenger_1.png',
  '../../public/Assets/Images/Image/messenger_2.png',
  '../../public/Assets/Images/Image/messenger_3.png',
  '../../public/Assets/Images/Image/messenger_4.png',
  '../../public/Assets/Images/Image/messenger_thumb.png',

  '../../public/Assets/Images/Image/ecotrip_1.png',
  '../../public/Assets/Images/Image/ecotrip_thumb.png',

  '../../public/Assets/Images/Image/blit_1.png',
  '../../public/Assets/Images/Image/blit_thumb.png',

  '../../public/Assets/Images/Image/Slider_1.jpg',
  '../../public/Assets/Images/Image/Slider_2.jpg',
  '../../public/Assets/Images/Image/Slider_3.jpg',

  '../../public/Assets/Images/Image/interviewPicture.jpg',
  // 추가 이미지 경로
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {images.map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>
      <body className="relative overflow-x-clip no-scrollbar">
        <SmoothScrollWrapper>
          {/* <Navigation className="fixed z-10 w-full px-4 mt-14 md:px-8 lg:px-12 xl:px-16"></Navigation> */}
          {children}
        </SmoothScrollWrapper>
        <div
          id="cursorRoot"
          className="absolute top-0 w-full h-full pointer-events-none"></div>
      </body>
    </html>
  );
}
