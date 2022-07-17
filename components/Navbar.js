import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.svg" height ={80} width ={150} />
            </div>
            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/blogs'>Blogs</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </nav>
        
     );
}
 
export default Navbar;