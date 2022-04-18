import Link from "next/link";
const clients = ( ) => {
    return (
        <div>
            <h1>Here are a list of our clients</h1>
            <ol>
                <li>
                    <Link href="/clients/20"> Fred</Link>
                </li>
                <li>
                    <Link href="/clients/24">Lavel</Link>
                </li>
                <li>
                    <Link href="/clients/18"> Pablo</Link>
                </li>
            </ol>
        </div>
    )
}



export default clients;