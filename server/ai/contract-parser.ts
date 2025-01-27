import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
;

class ContractParser {
  constructor() {
  }

  private async fetchPDFBuffer(url: string): Promise<ArrayBuffer> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.arrayBuffer();
    } catch (error) {
      throw new Error(`Error fetching PDF: ${(error as any).message}`);
    }
  }

  private async extractTextFromPDF(pdfBuffer: ArrayBuffer): Promise<string> {
    try {
      // Convert ArrayBuffer to Uint8Array
      const uint8Array = new Uint8Array(pdfBuffer);

      // Create a Blob from the Uint8Array
      const blob = new Blob([uint8Array], { type: 'application/pdf' });

      // Create a File object from the Blob
      const file = new File([blob], 'temp.pdf', { type: 'application/pdf' });

      // Use PDFLoader to load the file
      const loader = new PDFLoader(file);

      // Load the PDF and extract text content
      const docs = await loader.load();

      // Combine text content from all pages
      const fullText = docs.map((doc: any) => doc.pageContent).join(' ');

      return fullText.trim();
    } catch (error) {
      throw new Error(
        `Error extracting text from PDF: ${(error as any).message}`
      );
    }
  }

  async getFullText(url: string) {
    const pdfBuffer = await this.fetchPDFBuffer(url);
    const fullText = await this.extractTextFromPDF(pdfBuffer);
    return fullText;
  }

  async loadPDF(url: string) {
    try {
      // Fetch PDF from URL
      const pdfBuffer = await this.fetchPDFBuffer(url);
      // Extract text from PDF
      const fullText = await this.extractTextFromPDF(pdfBuffer);

      // Split text into manageable chunks
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });

      // Create a document-like structure similar to PDFLoader output
      const doc = { pageContent: fullText, metadata: { source: url } };
      return await textSplitter.splitDocuments([doc]);
    } catch (error) {
      console.error('Error loading PDF:', error);
      throw error;
    }
  }
    

  async parseContract(url: string) {
    try {
      const documents = await this.loadPDF(url);
      const fullText = documents.map((doc: any) => doc.pageContent).join(' ');
      return { text: fullText}
      
    } catch (error) {
      console.error('Error parsing CV:', error);
      throw error;
    }
  }
}

export default ContractParser;
