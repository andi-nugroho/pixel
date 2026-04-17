import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SHADERS_CONFIG, getShaderById } from "@/lib/shaders-config";
import { ShaderDocContent } from "./shader-doc-content";

interface ShaderDocPageProps {
  params: Promise<{ shader: string }>;
}

export async function generateMetadata({
  params,
}: ShaderDocPageProps): Promise<Metadata> {
  const { shader: shaderId } = await params;
  const shader = getShaderById(shaderId);

  if (!shader) {
    return { title: "Not Found" };
  }

  return {
    title: shader.name,
    description: shader.description,
  };
}

export async function generateStaticParams() {
  return SHADERS_CONFIG.map((shader) => ({
    shader: shader.id,
  }));
}

export default async function ShaderDocPage({ params }: ShaderDocPageProps) {
  const { shader: shaderId } = await params;
  const shader = getShaderById(shaderId);

  if (!shader) {
    notFound();
  }

  return <ShaderDocContent shader={shader} />;
}
