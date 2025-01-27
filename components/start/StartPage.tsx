"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { gql, useMutation } from 'urql';

const CREATE_CONTRACT = gql`
mutation Mutation($contractType: String, $name: String, $contractStartDate: Date, $contractEndDate: Date, $sendTo: String, $contractFile: String, $description: String) {
  createContract(contractType: $contractType, name: $name, contractStartDate: $contractStartDate, contractEndDate: $contractEndDate, sendTo: $sendTo, contractFile: $contractFile, description: $description) {
    id
    sendTo
    history
    description
    contractType
    contractStartDate
    contractFile
    contractEndDate
    comments {
      id
      comment
    }
  }
}
`;

const StartPage = () => {

    const [{ fetching: creatingContract }, createContract] = useMutation(CREATE_CONTRACT);
    const router = useRouter();

    const [formData, setFormData] = useState<{
        name: string;
        description: string;
        contractType: string;
        sendTo: string;
        contract: File | null;
        contractFile: string;
        contractStartDate: string;
        contractEndDate: string;
      }>({
        name: '',
        description: '',
        contractType: '',
        sendTo: '',
        contract: null,
        contractFile: "",
        contractStartDate: "",
        contractEndDate: ""
      });
      

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const [loading, setLoading] = useState(false);
      


      const fileToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
          const reader: any = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = (error: any) => reject(error);
        });
      };

      const handleFileUpload = async (event: any) => {
        const uploadedFile = event.target.files[0];
    
        if (uploadedFile && uploadedFile.type === 'application/pdf') {
          const base64 = await fileToBase64(uploadedFile);
          setLoading(true);
          try {
            const response = await fetch(`/api/contract`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ base64 }),
            });
    
            if (!response.ok) {
              throw new Error('Failed to upload resume');
            }
    
            const data = await response.json();
            setFormData({
              ...formData,
              contractFile: data.url,
              description: data.summary,
            });
          } catch (error) {
            console.error('Error uploading resume:', error);
          } finally {
            setLoading(false);
          }
        }
    
        event.target.value = '';
      };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    const contractStartDate = new Date(formData.contractStartDate).getTime();
    const contractEndDate = new Date(formData.contractEndDate).getTime();
    const response = await createContract({
      ...formData,
      contractStartDate,
      contractEndDate,
    });
    if (response.error) {
      alert('ERROR');
      return;
    }
    alert("Contract created");
    router.push("/inbox")
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Send Contract</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className=" text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
              className=" p-2 w-full rounded-md border-black-2 "
            />
          </div>

          {/* Detail */}
          <div>
            <label htmlFor="detail" className=" text-sm font-medium text-gray-700">
              Detail
            </label>
            <textarea
              id="detail"
              name="description"
              placeholder="Let AI generate it for you. Just upload the contract."
              value={formData.description}
              onChange={handleChange}
              required
              className="p-2 w-full rounded-md border-black-2"
            />
          </div>

          {/* Type */}
          <div>
            <label htmlFor="type" className=" text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              id="type"
              name="contractType"
              value={formData.contractType}
              onChange={handleChange}
              required
              className=" p-2 w-full rounded-md border-black-2"
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Procurement">Procurement</option>
              <option value="Logistics">Logestics</option>
              <option value="Other">Other</option>
            </select>
          </div>

            {/* Contract Start Date */}
            <div>
            <label htmlFor="contractStartDate" className=" text-sm font-medium text-gray-700">
              Contract Start Date
            </label>
            <input
              type="date"
              id="contractStartDate"
              name="contractStartDate"
              value={formData.contractStartDate}
              onChange={handleChange}
              required
              className=" p-2 w-full rounded-md border-black-2"
            />
            </div>

            {/* Contract End Date */}
            <div>
            <label htmlFor="contractEndDate" className=" text-sm font-medium text-gray-700">
              Contract End Date
            </label>
            <input
              type="date"
              id="contractEndDate"
              name="contractEndDate"
              value={formData.contractEndDate}
              onChange={handleChange}
              required
              className=" p-2 w-full rounded-md border-black-2"
            />
            </div>

          {/* Send To */}
          <div>
            <label htmlFor="sendTo" className=" text-sm font-medium text-gray-700">
              Send To
            </label>
            <input
              type="email"
              id="sendTo"
              name="sendTo"
              placeholder="Enter recipient email"
              value={formData.sendTo}
              onChange={handleChange}
              required
              className=" p-2 w-full rounded-md border-black-2"
            />
          </div>

          {/* Send Contract */}
          <div>
            <label htmlFor="contract" className=" text-sm font-medium text-gray-700">
              Send Contract
            </label>
            <input
              type="file"
              id="contract"
              name="contract"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="  w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 file:cursor-pointer focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md focus:ring focus:ring-blue-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartPage;
