
export const Hero = () => {
  return (
    <>
      <div className="mx-auto pt-20 max-w-7xl sm:grid-cols-9 gap-4 grid grid-cols-2">
        <div className="section1 col-span-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis saepe adipisci omnis facilis quae quam recusandae dolores fugit, accusantium impedit necessitatibus nostrum veniam vero aperiam inventore repellendus distinctio eum error? Qui rem eveniet pariatur quo mollitia vel quibusdam placeat saepe odio. Hic, facere soluta eaque tempora voluptatem ipsum perspiciatis repellendus assumenda accusamus quam doloremque aperiam voluptate velit dolorum. Expedita tenetur accusantium maxime! Tempore, nam facilis minima odio esse laborum expedita neque quam dicta consectetur ratione officia eos officiis veniam! Aut, quas sunt dolorum delectus, saepe fugiat natus cum perferendis fugit vel autem. Eligendi nam distinctio, obcaecati libero soluta sed atque ea reiciendis ullam ab repudiandae necessitatibus fugiat odio explicabo earum asperiores impedit accusantium maiores laborum minus voluptatum consectetur! Blanditiis corporis nobis a voluptas enim dignissimos, fuga doloremque sequi tenetur. Nihil aperiam fugiat ipsam quas ex pariatur sunt voluptatem assumenda tempore consequatur nisi inventore beatae ad labore itaque neque repudiandae, voluptatibus vero provident dignissimos quis iste. Explicabo voluptas perspiciatis temporibus asperiores quas aut fugiat tenetur ea doloribus suscipit dolore laborum quisquam debitis hic vel eligendi exercitationem, dolor consequatur expedita praesentium optio nostrum, ipsam pariatur numquam! Tempore ducimus perferendis, minus quidem omnis atque vel ipsum dignissimos aliquid ullam nulla laboriosam, nostrum quisquam labore vitae, harum quo vero inventore. Libero et vel cumque saepe neque? Est eius dignissimos, eum nisi repudiandae nihil? Quo, animi! Neque quo enim, cupiditate soluta voluptatem, molestias explicabo ad praesentium ipsam odio nostrum incidunt inventore ipsa expedita. Voluptates numquam voluptatum ducimus molestiae iste sapiente reiciendis inventore error tempora, ullam possimus dignissimos facilis at hic maxime placeat. Consequuntur corrupti ut quam cum itaque. Magni sit error, iure, dolor nihil sed cum quos modi nisi quia at! Inventore dignissimos ipsa voluptate saepe aut consequuntur laborum error possimus quasi recusandae, rerum, sunt esse voluptates eaque, nisi dolore reiciendis veritatis alias illum iure. Sapiente officiis porro amet nobis suscipit id maiores reprehenderit libero hic ad, similique sint. Laudantium, aliquid? Aperiam necessitatibus possimus omnis quas ut corrupti doloremque? Quasi similique maxime corrupti et ea doloremque, mollitia quidem numquam nostrum voluptate aliquid tempora omnis ipsam excepturi molestias sit dolores ratione dolorem iusto alias veritatis perspiciatis eos. Temporibus porro cumque numquam alias dolore nobis facere natus sunt vel! Tenetur pariatur error quis corporis facere, delectus earum, doloribus ipsa aspernatur laboriosam animi ducimus libero repellat perspiciatis ab esse enim totam? Officia a odit, blanditiis quas repellendus ipsa tenetur minus labore asperiores provident assumenda amet aperiam incidunt?
        </div>
        <div className="section1 col-span-3 mt-4">
          <div className="flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          </div>
        </div>

      </div>
    </>
  )
}

// components/HeroSection.tsx
import "./hero.scss"
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  description: string;
  cta: {
    label: string;
    url: string;
  };
  image?: {
    src: string;
    alt?: string;
  };
  features?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[]
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description, cta, features,image }) => {
  const loc =useLocation()
  return (
    <div className="relative mx-auto max-w-7xl mt-20 sm:mt-0 sm:justify-center sm:items-center textm-center grid sm:grid-cols-9  h-screen ">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bgm-gradient-radial"></div>

      {/* Hero Content */}
      <div className="z-10 px-4 sm:px-0 col-span-4  text-j white">
        <h1 data-aos="fade-up" className=" text-left text-2xl leading-normal sm:text-[48px] font-bold mb-4">{title}</h1>
        <p data-aos="fade-up" className="hidden sm:block mb-8">{description}</p>
        <NavLink
          to={cta.url}
          className="px-6 hidden w-1/3 text-center xl:flex md:flex justify-center items-center lg:flex  py-3 bg-nocash-500 text-white hover:text-white rounded-full hover:bg-nocash-600 transition duration-300"
        >
          {cta.label}
        </NavLink>
      </div>
    <div className="col-span-3 px-4">
      <img className="-mt-36 sm:mt-0" src={image?.src} alt={image?.alt} />
     <div className="lg:hidden md:hidden sm:hidden">
     <p className=" -mt-24 sm:mt-0 sm:hidden mb-8">{description}</p>
      <NavLink
          to={cta.url}
          className="px-6 sm:hidden  py-3 bg-nocash-500 text-white hover:text-white rounded-full hover:bg-nocash-600 transition duration-300"
        >
          {cta.label}
        </NavLink>
     </div>
    </div>
      {/* Hero feature List */}
      <div className="feature hidden sm:block col-span-2">
        {features?.map((feature) => (
          <div key={feature.title} className="feature-item p-4 hidden sm:block">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title text-xl text-nocash-500">{feature.title}</h3>
            <p className="feature-description line-clamp-2 sub">{feature.description}</p>
            <div className="flex items-center py-3">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-nocash-500 to-transparent"></div>
            </div>
          </div>

        ))}
      </div>
    
    </div>
  );
};

export default HeroSection;
