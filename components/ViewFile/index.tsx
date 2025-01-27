"use client"

import PDF from "./PDF"
import CommentSection from "./Comments"
import { gql, useQuery } from "urql"
import { useSearchParams } from "next/navigation";
import DetailSection from "./Details";
//exam90546
const GET_CONTRACT_INFO = gql`
query GetContract($getContractId: String!) {
  getContract(id: $getContractId) {
    id
    status
    sendTo
    name
    history
    description
    contractType
    contractStartDate
    contractFile
    contractEndDate
    comments {
      comment
      id
      user {
        name
        id
      }
    }
  }
}
`;

export default function ViewFile () {

    const searchParams = useSearchParams();
    const contractId = searchParams.get("id");
    const [{ fetching, data, error }] = useQuery({  query: GET_CONTRACT_INFO, variables: { getContractId: contractId} });

    if (fetching) return <p>Loading...</p>;
    const contract = data?.getContract;

    if (!contract) return <p>Contract not found</p>;

    return (
        <div className="flex ">
            <PDF contract={contract}/>
            <DetailSection contract={contract} />
        </div>
    )
}