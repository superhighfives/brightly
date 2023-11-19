export default function Announcement() {
  return (
    <div className="relative bg-white dark:bg-black p-3 shadow-xl flex rounded-2xl items-center justify-center -mx-96 h-[400px] overflow-hidden">
      <video
        muted
        autoPlay
        loop
        src="videos/loop-light.mov"
        className="block dark:hidden w-[600px]"
      />
      <video
        muted
        autoPlay
        loop
        src="videos/loop-dark.mov"
        className="hidden dark:block w-[600px]"
      />

      <div className="absolute top-1/2 left-1/2 bg-yellow-400 text-black rounded px-8 py-2 -translate-x-1/2 -translate-y-1/2 space-x-4 flex items-center">
        <span className="font-display italic text-3xl">Lysterfield Lake</span>
        <span className="uppercase">December 1</span>
      </div>
    </div>
  )
}
