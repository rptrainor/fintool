import { QueryForm } from "~/components/QueryForm"
export default function Home() {
  return (
    <main className="flex flex-col items-center pt-4 sm:pt-8 md:pt-12 lg:pt-16 px-4">
      <div className="w-full max-w-2xl">
        <QueryForm />
      </div>
    </main>
  );
}
