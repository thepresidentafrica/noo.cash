import { useEffect } from "react";

export const useScroll = (location:any) => {
    useEffect(() => {
        const scrollToSection = () => {
          if (location.hash) {
            const targetSection = document.getElementById(window.location.hash.substring(1));
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
    
        // Call scrollToSection when the component mounts and whenever the hash changes
        scrollToSection();
    
        window.addEventListener('hashchange', scrollToSection);
    
        return () => {
          // Cleanup: remove the event listener when the component is unmounted
          window.removeEventListener('hashchange', scrollToSection);
        };
      }, [location.hash]);
}