import Logo from '@/app/components/Logo'

export default function Header() {
  return (
    <div className="space-y-8">
      <Logo />
      <header className="pl-2">
        <div className="text-slate-600 dark:text-yellow-400 space-y-8">
          <p className="text-xl sm:text-2xl">
            <span className="border-b border-slate-400/50 dark:border-yellow-700/50">
              Brightly is Charlie Gleason, a musician, programmer and computer
              science dropout.
            </span>
          </p>
          <p>
            He threads together folk, electronica, and surreptitious recordings
            of children screaming in airplanes with projects that explore the
            intersection of technology, music, and art.
          </p>
        </div>
      </header>
    </div>
  )
}
