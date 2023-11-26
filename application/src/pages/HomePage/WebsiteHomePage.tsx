import { HERO_DATA, HeroSection } from "../../components"

export const WebsiteHomePage = () => {
    return (
        <>
      
        {/* TODO:  subtracted Add prpper footer  additions*/}
        <section id="home" className="features bg-nocash-20 min-h-screen">
        <HeroSection {...HERO_DATA}/>

        </section>
        <section id="features" className="features min-h-screen">
            {/* <p>Features Section</p> */}
        </section>
        <section id="how-it-works" className="features min-h-screen">
        {/* <p>HOW  Section</p> */}

        </section>
        <section id="explore" className="features min-h-screen">
            {/* explore section */}
        </section>
        </>
    )
}