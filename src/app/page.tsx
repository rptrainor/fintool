import Image from "next/image";
import tree from '../../public/tree.jpg'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Image 
        alt="desktop background image"
        src={tree}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </main>
  );
}
