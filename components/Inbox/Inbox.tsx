"use client";
import React, { useState } from "react";
import { gql, useQuery } from "urql";
import type * as Prisma from '@prisma/client';
import { useRouter } from "next/navigation";

type Contract = {
  id: number;
  name: string;
  status: string;
  sendTo: string;
  lastChange: string;
  fileUrl: string; // URL for the online PDF
};

const GET_CONTRACTS = gql`
query GetContract($folder: String) {
  contracts(folder: $folder) {
    id
    sendTo
    history
    description
    contractType
    status
    contractStartDate
    contractFile
    name
    contractEndDate
  }
}
`;

const Sent: React.FC = () => {
  const [{ fetching, data, error }] = useQuery({  query: GET_CONTRACTS, variables: { folder: "inbox" } });
  const contracts: Prisma.Contract[] = data?.contracts || [];
  const router = useRouter();

  const [selectedContracts, setSelectedContracts] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (id: string) => {
    setSelectedContracts((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id); // Deselect if already selected
      } else {
        updated.add(id); // Select if not already selected
      }
      return updated;
    });
  };

  const handleDownload = (fileUrl: string) => {
    window.open(fileUrl, "_blank");
  };

  if (fetching) return <p>Loading...</p>;

  return (
    <div className="p-6 mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Inbox</h2>

      

      {/* Contracts Table */}
      <div className=" bg-white overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className=" border-b">
              <th className="px-4 py-2">
                
              </th>
              <th className="text-left px-4 py-2 text-gray-600 font-medium">Name</th>
              <th className="text-left px-4 py-2 text-gray-600 font-medium">Status</th>
              <th className="text-left px-4 py-2 text-gray-600 font-medium">Last Change</th>
              <th className="text-left px-4 py-2 text-gray-600 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id} className="border-b hover:bg-gray-50" onClick={() => router.push(`/contract?id=${contract.id}`)}>
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedContracts.has(contract.id)}
                    onChange={() => handleCheckboxChange(contract.id)}
                  />
                </td>
                <td className="px-4 py-3">
                  <div>
                    <p className="font-semibold">{contract.name || <i>No Name</i>}</p>
                    <p className="text-sm text-gray-500">To: {contract.sendTo}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-green-600 font-medium">{contract.status || "SENT"}</td>
                <td className="px-4 py-3 text-gray-500">{new Date(contract.contractStartDate).toISOString()}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-4">
                    <button
                      className="text-sm text-blue-500 hover:underline"
                      onClick={() => handleDownload(contract.contractFile)}
                    >
                      Download
                    </button>
                    <button className="text-sm text-gray-500 hover:underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 12a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zm0-4.5a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zm0 9a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75z"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sent;
