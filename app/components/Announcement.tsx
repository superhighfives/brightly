import { PiMusicNotesFill } from 'react-icons/pi'

export default function Announcement() {
  return (
    <div className="relative bg-white dark:bg-black md:p-3 shadow-xl flex rounded-2xl items-center justify-center md:-mx-20 lg:-mx-52 xl:-mx-72 h-[400px] overflow-hidden">
      <video
        muted
        autoPlay
        loop
        playsInline
        src="videos/loop-light.mov"
        className="block dark:hidden w-[600px] opacity-40"
      />
      <video
        muted
        autoPlay
        loop
        playsInline
        src="videos/loop-dark.mov"
        className="hidden dark:block w-[600px] opacity-40"
      />

      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <a
          href="https://lysterfieldlake.com/"
          className=" bg-yellow-400 text-black rounded px-8 py-2 space-x-4 flex items-center hover:bg-black hover:text-white group"
        >
          <span className="whitespace-nowrap font-display italic text-2xl xs:text-3xl">
            Lysterfield Lake
          </span>
          <span className="whitespace-nowrap uppercase border-b border-black group-hover:border-white">
            Visit<span className="hidden sm:inline"> the project</span>
          </span>
        </a>
        <a
          href="/lysterfield-lake"
          className="font-semibold rounded-md px-2 py-1 flex items-center gap-2 group text-sm dark:hover:text-white hover:text-black"
        >
          <PiMusicNotesFill />
          <span className="border-b border-current">
            Find<span className="hidden xs:inline"> on</span> streaming services
          </span>
        </a>
      </div>
    </div>
  )
}
