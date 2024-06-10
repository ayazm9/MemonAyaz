import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
 // Import useScroll from the correct path
import Liicon from './Liicon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-4 first:mt-0 last:mb-0  w-[60% ]rounded-lg relative mx-auto flex items-start">
      <Liicon reference={ref}/> {/* Pass the reference to Liicon component */}
      <div className="ml-8">
        <h3 className="text-2xl font-bold dark:text-light">
          {position}&nbsp;
          <a href={companyLink} className="text-purple-600 hover:text-purple-800 dark:text-yellow-600">@{company}</a>
        </h3>
        <span className="block text-sm italic text-gray-500 dark:text-light">
          {time} | {address}
        </span>
        <p className="mt-2 text-lg dark:text-light">
          {work}
        </p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="my-8">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light">
        Experience
      </h2>
      <div className="w-full flex justify-center">
        <div ref={ref} className="w-[75%] relative"> {/* Remove the ref attribute here */}
          <motion.div
            className="absolute left-14 top-0 bottom-0 w-[4px] bg-purple-600 origin-top dark:bg-yellow-600"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>
          <ul className="pl-4">
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            />
            <br></br>
            <Details
              position="Frontend Developer"
              company="Facebook"
              companyLink="https://www.facebook.com"
              time="2020-2022"
              address="Menlo Park, CA"
              work="Developed and maintained user interfaces for Facebook’s social media platform, focusing on performance optimization and user experience enhancements."
            />
            <br></br>
            <Details
              position="UI/UX Designer"
              company="Apple"
              companyLink="https://www.apple.com"
              time="2018-2020"
              address="Cupertino, CA"
              work="Designed user interfaces and user experiences for various Apple applications and devices, ensuring intuitive and seamless interactions."
            />
            <br></br>
            <Details
              position="Intern"
              company="Microsoft"
              companyLink="https://www.microsoft.com"
              time="2017-2018"
              address="Redmond, WA"
              work="Assisted in developing new features for Microsoft Office Suite and participated in usability testing and feedback sessions."
            />
            <br></br>
            <Details
              position="Junior Developer"
              company="Amazon"
              companyLink="https://www.amazon.com"
              time="2015-2017"
              address="Seattle, WA"
              work="Contributed to the development of internal tools and customer-facing applications, focusing on improving performance and scalability."
            />
            <br></br>
            <Details
              position="Web Developer"
              company="Netflix"
              companyLink="https://www.netflix.com"
              time="2013-2015"
              address="Los Gatos, CA"
              work="Worked on the front-end team to develop and enhance the streaming platform's user interface, ensuring cross-browser compatibility and responsive design."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
