import Container from "../container"
import Heading from "../heading"
import PatternContainer from "../pattern-container"

const EducationSection = () => {
  return (
    <>
    <Container innerClassName="px-4 py-2">
        {/* <Heading
          heading="Contributions"
          description="Open source and community work I've been involved in."
        /> */}
        <Heading
          heading="Education"
          description="Where I’m studying and what I’m pursuing."
        />
      </Container>

      <Container>
        <div className="grid grid-cols-4">
          <div className="border-primary/70 border-y-none col-span-1 border-r">
            <PatternContainer height="full" />
          </div>
          <div className="col-span-3">
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-lg text-neutral-100 font-semibold tracking-tight">Bachelor of Engineering - Information Technology</h1>
                    <p className="text-sm text-neutral-300/50">St. Francis Institute of Technology, Mumbai</p>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                    <h1 className="text-md text-neutral-100 font-semibold tracking-tight">2023 - 2027</h1>
                    <p className="text-xs text-neutral-300/50">CGPA: 7.5</p>
                </div>
            </div>
          </div>
          </div>
        </Container>
    </>
  )
}

export default EducationSection