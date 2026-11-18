import Link from 'next/link';
export default function Navbar(){return <header className="nav"><Link className="brand" href="/"><span className="brand-mark">N</span><span>NULL <b>KOCHI</b></span></Link><nav><a href="/#events">Events</a><a href="/#about">About</a><a href="/#connect">Connect</a></nav><Link className="nav-cta" href="/admin">Admin <span>↗</span></Link></header>}
