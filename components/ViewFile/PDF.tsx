"use client"
import React, { useEffect, useState } from "react";

const PDF_SOURCES = [
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  "https://arxiv.org/pdf/2310.16578.pdf",
  "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c02342412.pdf",
  "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf.pdf"
];

const RandomPDFViewer = ({ contract }: { contract: any }) => {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const randomPdf = PDF_SOURCES[Math.floor(Math.random() * PDF_SOURCES.length)];
    setPdfUrl(randomPdf);
  }, []);

  return (
    <div className="w-full h-screen p-4 bg-gray-100">
      <div className="w-full h-full rounded-lg shadow-lg overflow-hidden">
        {pdfUrl ? (
          <object 
            data={contract.contractFile} 
            type="application/pdf" 
            className="w-full h-full"
          >
            <div className="flex items-center justify-center w-full h-full bg-white">
              <p className="text-gray-600">
                PDF viewer is not supported. Please{" "}
                <a
                  href={pdfUrl}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  download the file
                </a>
                .
              </p>
            </div>
          </object>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default RandomPDFViewer;