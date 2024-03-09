import React from 'react';

const About = () => {
  return (
    <div className="container subContainer mt-5" id='about'>
      <div className="contactTitle subTitle">
        Skills and Languages
      </div>
      <div className="skillsAndLanguages">
        <div className="skillCard">
          <h5><span className="circle"></span> Front End Development</h5>
          <p className='mt-3'>
          In Front End Development, I specialize in creating engaging and responsive web interfaces using <span className='Languages'>React, HTML, CSS, JavaScript, and Bootstrap</span>. With these technologies, I ensure that websites are not only visually appealing but also functional and user-friendly, enhancing the overall user experience.
          </p>
        </div>
        <div className="skillCard">
          <h5><span className="circle"></span> UI/UX Design</h5>
          <p className='mt-3'>
          My expertise in UI/UX Design revolves around crafting intuitive user experiences and visually appealing designs. I proficiently use <span className='UITools'>Figma and Adobe XD</span> to translate ideas into prototypes and wireframes, refining user flows and visual aesthetics to create seamless and captivating designs.
          </p>
        </div>
        <div className="skillCard">
          <h5><span className="circle"></span> Graphic Designing</h5>
          <p className='mt-3'>
          In Graphic Design, I leverage <span className='creativeTools'>Adobe Illustrator, Photoshop, InDesign, and Canva</span> to create impactful visuals for both digital and print media. Whether it's designing vector graphics, manipulating images, or laying out print materials, I bring creativity and technical proficiency to deliver polished and professional results that resonate with audiences.
          </p>
        </div>
      </div>
      <div className="viewPortfolio mt-4">
        <div className="skillCard">
        <h5><span className="circle"></span> Graphic Design Portfolio</h5>
        <div className="behance mt-3 ">
          <iframe src="https://www.behance.net/embed/project/164402949?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin" scrolling='no'></iframe>
          <iframe src="https://www.behance.net/embed/project/164400157?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin" scrolling='no'></iframe>
          <iframe src="https://www.behance.net/embed/project/164402641?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin" scrolling='no'></iframe>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
