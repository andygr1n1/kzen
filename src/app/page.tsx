import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h1 className="font-bold">Hello, GeeksforGeeks Learner!!</h1>
            <div>
                <h2 className="italic">Home Page</h2>
                <Link href="/profile">
                    <h3>About Us</h3>
                </Link>
            </div>
        </>
    )
}
