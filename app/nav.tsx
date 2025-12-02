import Link from 'next/link'

export default function Nav() {
    return (
        <nav className='bg-blue-200 block w-full px-5 py-3.5'>
            <ul className='flex gap-2'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
            
        </nav>
    );
}
