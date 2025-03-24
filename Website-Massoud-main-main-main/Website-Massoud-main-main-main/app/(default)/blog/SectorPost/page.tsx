import Image from "next/image";
import FeatImage01 from "@/public/images/inspection.png";

export default function SectorsPost() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="h2 text-center mb-8">Sectors</h1>
      <Image
        src={FeatImage01}
        alt="Quality inspection across sectors"
        width={840}
        height={405}
        className="mx-auto mb-8"
      />
      <p className="text-xl text-gray-400 mb-12 text-center">
        We have a multidisciplinary team formed by well-educated and experienced engineers and technicians located throughout Europe...
      </p>
      <p className="text-lg text-gray-400 mb-4">
        With extensive experience across various fields, our team is trusted to deliver exceptional service quality. Our track record has earned us the confidence and satisfaction of our customers, enhancing our ability to assist in quality assurance worldwide.
      </p>
    </section>
  );
}
