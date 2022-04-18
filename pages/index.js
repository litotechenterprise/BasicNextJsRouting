import Link from "next/link"

export default function HomePage () {
  return (
    <div>
      <h1>Welcome to out Next.js project</h1>
      <ol>
        <li>
            <Link href={"/portfolio"}>Portfolio Page</Link>
        </li>
        <li>
          <Link href={"/clients"}>Clients</Link>
        </li>
      </ol>
    </div>
  );
}
