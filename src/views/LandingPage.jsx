import HeroImage from "../assets/images/HeroImage.png"
import PrimaryBtn from "../components/Buttons/PrimaryBtn"
import SecondaryBtn from "../components/Buttons/SecondaryBtn"
import Fast from  "../assets/images/Fast.png"
import Simple from  "../assets/images/Simple.png"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className='py-10 px-4 md:px-6 lg:px-60'>
      <main className="flex flex-col-reverse lg:flex-row md:items-center gap-7">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold leading-[50px]">Share All Your Links With Friends</h1>
          <p className="text-lg lg:first-line:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente laudantium, vel mollitia ipsam accusamus ea dolore explicabo.</p>
          <Link className="flex flex-col" to="/signup">
            <PrimaryBtn text="Get Started"/>
          </Link>
          <a href="#works" className="flex flex-col">
            <SecondaryBtn className text="How does it work?"/>
          </a>
          
        </div>
        <div className="">
          <img src={HeroImage} className="rounded-lg lg:w-[1500px]" alt="Hero image" />
        </div>
      </main>

      <section className="mt-14 text-center">
        <h1 className="text-4xl font-bold mb-8">Why One Link?</h1>
        <div className="flex flex-col gap-10 lg:flex-row">
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
        </div>
        
      </section>
      <section id="works" className="md:w-[80%] mx-auto mt-14 text-center flex flex-col gap-10">
        <h1 className="text-4xl font-bold">How it works</h1>
        <article className="flex flex-col items-center gap-6 px-10 py-6 md:py-10 bg-[#081b04] rounded-lg">
          <h1 className="text-2xl font-semibold">Share your links in four easy steps</h1>
          <ul className="list-decimal text-lg flex flex-col gap-2">
            <li className="self-start">Click the sign up button to set up your profile/account</li>
            <li className="self-start">Navigate to the manage links page to add your links</li>
            <li className="self-start">Navigate to the profile to view your links</li>
            <li className="self-start">Share your username to your friends to share your links</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default LandingPage
