import { useRef } from "react";
import { ContainerHolder, HERO_DATA, HeroSection } from "../../components"
import { useScroll } from "../../hooks"
import { useLocation } from "react-router-dom";

export const WebsiteHomePage = () => {
    const sectionRef = useRef(null);
    const loc =useLocation()
    useScroll(loc)
    return (
        <div key={loc.key}>
      
        {/* TODO:  subtracted Add prpper footer  additions*/}
        <section ref={sectionRef} id="home" className="features bg-nocash-20 min-h-screen">
        <HeroSection {...HERO_DATA}/>
      
        </section>
        <section className="max-w-7xl px-4 mx-auto">
            <ContainerHolder name={"shoppers"}></ContainerHolder>
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
        </div>
    )
}