export default function Intro() {
  return (
    <div className="bg-neutral-900 aspect-[1/2] -mb-48 sm:aspect-square w-full shadow-xl max-h-[60vh] relative m-16 rounded">
      <div
        className="bg-no-repeat bg-cover bg-top w-full h-full opacity-25 absolute inset-0"
        style={{
          backgroundImage: `url(/images/latest-lysterfield-lake.jpg)`,
        }}
      ></div>
    </div>
  )
}
