import Image from "next/image";
import { Inter } from "next/font/google";
import cynth from "@/public/videos/New.mp4";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="video bg-black w-full h-screen">
        <video src={cynth} autoPlay muted controls></video>
      </div>
    </main>
  );
}
