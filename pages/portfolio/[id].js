import { useRouter } from "next/router"

export default function PortfolioIdPage () {
    const router = useRouter()
    console.log(router);
    return (
        <div>
            <h1>here is the an id page #{router.query.id}</h1>
        </div>
    )
}