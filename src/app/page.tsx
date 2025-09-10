"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ---------- 공용 애니메이션 설정 ----------


// ---------- Tech Chip ----------


// ---------- 섹션 래퍼 (스크롤 시 살짝 떠오르는 효과) ----------


export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      // <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <div className="font-sans items-center justify-items-center w-full text-center">
      <main>
        <header>
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="mb-4 text-8xl font-bold text-gray-950">PARK MIN HYE</div>
              <div className="mb-4 text-4xl font-bold text-gray-950">Front-end Developer</div>
            </div>
        </header>

        <section>
          <div className="w-full text-center ">
            <motion.h1
              className="mb-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <p className="text-[30px] text-gray-900">사용해본 기술</p> */}
              <p className="text-md text-gray-900">사용해본 기술</p>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-gray-600"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-gray-300 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">FE</h3>
                  <p className="mt-2 text-sm text-gray-600">React, Next.js, TypeScript, JavaScript</p>
                </div>
                <div className="rounded-xl border border-gray-300 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">BE</h3>
                  <p className="mt-2 text-sm text-gray-600">Node.js, MySQL, MariaDB</p>
                </div>
                <div className="rounded-xl border border-gray-300 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">기타</h3>
                  <p className="mt-2 text-sm text-gray-600">Prisma, Git</p>
                </div>
              </div>
            </motion.p>
            <motion.div
              className="mx-auto mt-7 flex w-full max-w-md items-center justify-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <a
                href="#projects"
                className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black"
              >
                View Projects
              </a>
              <a
                href="https://github.com/candypmh?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </section>

    
      </main>
      <footer className="mt-10 mb-10 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <p>Designed & Developed By Park Minhye ©2025</p> 
      </footer>
    </div>
  );
}
