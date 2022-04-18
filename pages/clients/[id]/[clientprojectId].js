import { useRouter } from "next/router";

const ClientProjectId = () => {
    const {query} = useRouter();
    // id: '24', clientprojectId: '10'
    return (
        <div>
            <h1>here is our client id {query.id} {"&"} here is our project id: {query.clientprojectId}</h1>
        </div>
    )
}

export default ClientProjectId;