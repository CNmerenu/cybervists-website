import { PortableText as PortableTextComponent } from "@portabletext/react";
import Image from "next/image";

interface ImageValue {
  asset: { url: string };
  alt?: string;
}

interface BlockProps {
  children?: React.ReactNode;
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => (
      <Image src={value.asset.url} alt={value.alt || ""} width={800} height={400} />
    ),
  },
  block: {
    h1: ({ children }: BlockProps) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: BlockProps) => (
      <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>
    ),
    normal: ({ children }: BlockProps) => <p className="mb-4">{children}</p>,
  },
};

export default function PortableText({ content }: { content: unknown }) {
  return (
    <PortableTextComponent
      value={content as Parameters<typeof PortableTextComponent>[0]['value']}
      components={myPortableTextComponents}
    />
  );
}
