import Image from "next/image";

import { Ticket } from "../components/Ticket";

export default function Home() {
  const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_ID}`;

  return (
    <>
      <main className="lg:h-screen max-w-[480px] lg:max-w-[1240px] p-12 mx-auto flex items-center gap-16 flex-col lg:flex-row">
        <Ticket className="flex-1 w-full h-auto drop-shadow-ticket" />
      </main>
    </>
  );
}
