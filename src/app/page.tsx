import { QueryForm } from "~/components/QueryForm"
import { SuggestedQueries } from "~/components/SuggestedQueries"

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-4 sm:pt-8 md:pt-12 lg:pt-16 px-4 gap-2 max-w-2xl overflow-scroll max-h-[calc(100vh-8rem)]">
      <QueryForm />
      <SuggestedQueries />
    </main>
  );
}
