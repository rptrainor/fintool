import { CommandDemo } from "~/components/CommandDemo"

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-1 pt-12 px-4">
      <div className="w-full max-w-xs">
        <CommandDemo />
      </div>
    </main>
  );
}
