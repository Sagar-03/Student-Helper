import React, { useState } from "react";

const PdfViewer = ({ pdfs }) => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pdfs.map((pdf, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedPdf(pdf.path)}
          >
            <h2 className="text-sm font-semibold text-gray-800">{pdf.name}</h2>
          </div>
        ))}
      </div>

      {selectedPdf && (
        <div className="w-full h-[80vh] mt-6">
          <iframe
            src={selectedPdf}
            className="w-full h-full rounded-xl border"
            title="PDF Viewer"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
