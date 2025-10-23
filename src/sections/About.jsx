import{ useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { AnimatedTextLines } from '../components/AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {

  const imgRef = useRef(null);

  const text = `Passionate about user-centered design, 
  I create intuitive and impactful experiences, 
  from research to delivery.`;

  const aboutText = `UI/UX Engineer and Project Lead with a Computer Science background, creating user-focused, scalable, and visually refined digital experiences. Blending creativity, strategy, and teamwork to turn ideas into meaningful products:
  
  🎨 Design — Craft clean, intuitive, and engaging interfaces.
  🧠 Strategy — Transform user insights into purposeful design decisions.
  ⚙️ Systems — Build scalable prototypes and design systems.
  🚀 Leadership — Guide teams from concept to launch.
  🤝 Collaboration — Align design, development, and business goals.
  📈 Continuous Improvement — Focus on iteration, feedback, and optimization.`;

  useGSAP(() => {
    gsap.to("#about", {
        scale: 0.95,
        scrollTrigger: {
            trigger: "#about",
            start: "bottom 80%",
            end: "bottom 20%",
            scrub: true,
            
        },
        ease: "power1.inOut",
    });

    gsap.set(imgRef.current,{
        clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",

    });

    gsap.to(imgRef.current,{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration:2,
        ease:"power4.out",
        scrollTrigger:{
            trigger: imgRef.current
        },
    });

  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
        <AnimatedHeaderSection
            subTitle={"Helping brands grow digitally"}
            title={"About"}
            text={text}
            textColor={"text-white"}
            withScrollTrigger={true}
        />

        <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
            <img ref={imgRef} src="images/about.png" alt="my image" className="w-md rounded-3xl"/>
            <AnimatedTextLines text={aboutText} className={"w-full"}/>

        </div>
      
    </section>
  )
}

export default About
