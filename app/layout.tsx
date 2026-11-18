import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata:Metadata={title:'NULL KOCHI — Cybersecurity Community',description:'A community for cybersecurity learners, builders and defenders.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/><main>{children}</main><Footer/></body></html>}
