import Link from "next/link";

export default function AboutLayout({ children }) {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href={'/about/vission'}>Vission</Link></li>
                    <li>
                        <Link href={'/about/mission'}>Mission</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}