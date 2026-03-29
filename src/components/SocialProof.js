import Image from 'next/image';
import FadeUp from './FadeUp';

export default function SocialProof() {
  return (
    <section className="relative z-10 py-14">
      <div className="section-divider mb-12" />
      <FadeUp className="text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-8">Partners with</p>
        <div className="flex justify-center">
          <Image
            src="/images/princelub.png"
            alt="Prince Lubricants"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
      </FadeUp>
      <div className="section-divider mt-12" />
    </section>
  );
}
