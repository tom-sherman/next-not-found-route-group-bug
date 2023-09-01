import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page({ params }: { params: { id: string } }) {
  if (params.id === "a") {
    notFound();
  }

  return <p>{params.id}</p>;
}
