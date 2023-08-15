import HeroImage from "../assets/images/HeroImage.png"
import PrimaryBtn from "../components/Buttons/PrimaryBtn"
import SecondaryBtn from "../components/Buttons/SecondaryBtn"
import Fast from  "../assets/images/Fast.png"
import Simple from  "../assets/images/Simple.png"


const LandingPage = () => {
  return (
    <div className='py-10 mx-4 md:mx-10'>
      <main className="flex flex-col-reverse lg:flex-row md:items-center gap-7">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold leading-[50px]">Share All Your Links With Friends</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente laudantium, vel mollitia ipsam accusamus ea dolore explicabo.</p>
          <PrimaryBtn text="Get Started"/>
          <SecondaryBtn text="How does it work?"/>
        </div>
        <div className="">
          <img src={HeroImage} className="rounded-lg lg:w-[1500px]" alt="Hero image" />
        </div>
      </main>

      <section className="mt-14 text-center flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Why One Link?</h1>
        <article className="flex flex-col items-center gap-6 px-4 py-6 md:py-10 bg-[#0c221f] rounded-lg">
          <img className="rounded-lg md:w-[80%]" src={Fast} alt="" />
          <h1 className="text-2xl font-semibold">It&apos;s fast</h1>
          <p className="text-lg">No need to spend hours with setup. Add your links right away!</p>
        </article>
        <article className="flex flex-col gap-6 items-center px-4 py-6 md:py-10 bg-[#0c221f] rounded-lg">
          <img className="rounded-lg md:w-[80%]" src={Simple} alt="" />
          <h1 className="text-2xl font-semibold">It&apos;s simple</h1>
          <p className="text-lg md:text-xl">Share your links with your username with a few simple clicks</p>
        </article>
      </section>
    </div>
  )
}

export default LandingPage
