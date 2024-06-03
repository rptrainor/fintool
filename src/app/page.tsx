import { QueryForm } from "~/components/QueryForm"
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-1 pt-12 px-4">
      <div className="w-full max-w-lg">
        <QueryForm />
      </div>
    </main>
  );
}
