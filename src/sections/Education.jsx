import { GraduationCap } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="flex flex-col gap-16 items-center justify-center py-20 lg:py-0 lg:h-screen">
        <div className="flex gap-3 items-center">
        <GraduationCap size={52} className="text-primary" />
        <h1 className="text-3xl lg:text-5xl font-bold text-secondary">Education</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-start gap-6 rounded-2xl shadow-xl shadow-zinc-400 bg-off-white w-80 mx-3 lg:mx-0 pb-8 lg:pb-0 lg:w-full hover:shadow-2xl hover:shadow-zinc-500 hover:translate-y-2 transition">
            <img src="assets/college.jpg" className="h-44 w-full lg:w-64 rounded-2xl lg:rounded-s-2xl"/>
            <div className="flex flex-col gap-2 px-6 lg:pr-6 lg:pt-6">
                <h1 className="text-xl lg:text-2xl font-semibold text-secondary">Bachelor of Technology In Computer Science Engineering</h1>
                <p className="text-md lg:text-lg font-semibold text-black/80">Asansol Engineering College</p>
                <p className="text-lg lg:text-xl font-semibold text-primary">2021 - 2025 | Pursuing</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-start gap-6 rounded-2xl shadow-xl shadow-zinc-400 bg-off-white w-80 mx-3 lg:mx-0 pb-8 lg:pb-0 lg:w-full hover:shadow-2xl hover:shadow-zinc-500 hover:translate-y-2 transition">
            <img src="assets/school.jpg" className="h-44 w-full lg:w-64 rounded-2xl lg:rounded-s-2xl"/>
            <div className="flex flex-col gap-2 px-6 lg:pr-6 lg:pt-6">
                <h1 className="text-xl lg:text-2xl font-semibold text-secondary">Higher Secondary In Science</h1>
                <p className="text-md lg:text-lg font-semibold text-black/80">B N &apos;s Collegiate School Patna,Bihar</p>
                <p className="text-lg lg:text-xl font-semibold text-primary">2019 - 2021 | Completed</p>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Education