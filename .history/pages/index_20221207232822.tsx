import Image from "next/image";

import { Ticket } from "../components/Ticket";

export default function Home() {
  const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_ID}`;

  return (
    <>
      <main className="lg:h-screen max-w-[480px] lg:max-w-[1240px] p-12 mx-auto flex items-center gap-16 flex-col lg:flex-row">
        <div className="max-w-[520px] text-center lg:text-left">
          <Image src="/logo.svg" width={228} height={63} />

          <strong className="block mt-12 text-3xl leading-tight text-neutral-200 lg:text-4xl">
            Crie um ticket único e compartilhe com o mundo
          </strong>

          <footer className="flex flex-col gap-5 mt-10 lg:flex-row">
            <a
              href={signInUrl}
              className="flex items-center justify-center gap-2 px-6 py-4 font-bold text-black rounded bg-brand-500"
            >
              <Image src="/icons/github.svg" width={24} height={24} />
              Faça login com Github
            </a>
          </footer>
        </div>

        <Ticket className="flex-1 w-full h-auto drop-shadow-ticket" />
      </main>
    </>
  );
}
