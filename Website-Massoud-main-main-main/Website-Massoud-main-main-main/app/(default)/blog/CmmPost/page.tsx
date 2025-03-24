// components/CMMPost.js

import Image from "next/image";
import CMM from "@/public/images/CMM.jpg";

export default function CMMPost() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="h2 mb-4">Unveiling the Role of CMM in Quality Inspection</h1>
      <Image
        className="max-w-full mx-auto h-auto"
        src={CMM}
        width={840}
        height={405}
        alt="Features 01"
      />
      <p className="text-xl text-gray-400 my-4">
        In this captivating snapshot, we witness the essence of precision encapsulated...
      </p>
      <a href="/" className="text-blue-500">← Back to Blog List</a>
    </div>
  );
}
