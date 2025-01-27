"use client"
import React, { useContext, useState } from 'react';
import moment from "moment";
import { AppContext } from '@/utils/context';
import { gql, useMutation } from 'urql';

interface IProps {
  contract: any;
}

const SIGN_CONTRACT = gql`
mutation SignContract($contractId: String) {
  signContract(contractId: $contractId) {
    id
  }
}
`;

const DetailSection: React.FC<IProps> = ({ contract }) => {

    const { context: { user } } = useContext(AppContext);
    const [{ fetching }, signContract] = useMutation(SIGN_CONTRACT);
  
  return (
    <div className=" mx-auto p-4 rounded-lg shadow-md min-w-[280px]">
      <div className='font-bold'>
        {contract.name}
      </div>
      <div className='my-2 text-sm'>
        Contract start date is {
            moment(new Date(contract.contractStartDate)).format("DD MMMM YYYY")
        } and end date is {
            moment(new Date(contract.contractEndDate)).format("DD MMMM YYYY")
        }
      </div>
      {
        (contract.sendTo === (user as any)?.email) && contract.status === 'SENT' &&
      <div className='my-4 text-sm'>
        <button className='bg-blue-600 w-full text-white px-2 py-2 ' onClick={() => signContract({ contractId: contract.id })}>
            {
                fetching ? 'Signing...' : 'Sign Contract'
            }
        </button>
      </div>
    }
    <div>
        <b>Type: </b>{contract.contractType}
    </div>
    {
        contract.status === 'SIGNED' &&
        <div className='my-4 text-sm text-green-600 font-semibold'>
            <p className='text-green-600'>Contract Signed</p>
        </div>
    }
      
      <div className='my-2 text-sm max-w-[280px]'>
        <div className='font-bold'>Description</div>
        <p>{contract.description}</p>
        </div>

        <div className='my-2 text-sm'>
            <p className='font-semibold'>History</p>
        <ul className='list-disc px-2'>
            {
                contract.history?.map((history: any) => {
                    return <li key={history.id}>{history}</li>
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default DetailSection;