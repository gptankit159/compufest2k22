import React from "react";
import Image from "next/image";
import AcmLogo from "../public/assets/imgs/acmLogo.png";
import CTSCLogo from "../public/assets/imgs/CTSC.png";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="text-gray-700 bg-bg_custom body-font container mx-auto flex flex-col lg:flex-row"
      >
        <div className="flex px-5 py-24 items-center justify-center flex-col w-full lg:w-1/2">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="ACM logo"
            src={AcmLogo}
            placeholder={"blur"}
            height={250}
            width={280}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              ACM Student Chapter
            </h1>
            <p className="leading-relaxed mb-8 text-justify">
              Department of Computer Technology has started ACM Student chapter
              in the year 2008. It serve as hubs of activity for the students of
              the department and the computing community at large. Various
              seminars, webinars, guest lectures, student development programs,
              learning forums and networking opportunities with peers and
              experts across the computing spectrum. ACM encourages growth in
              the computing community through its support of professional,
              student, and local Special Interest Group chapters worldwide.
            </p>
          </div>
        </div>

        <div className="flex px-5 py-24 items-center justify-center flex-col w-full lg:w-1/2">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="CTSC Logo"
            src={CTSCLogo}
            placeholder={"blur"}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              CT Student Council
            </h1>
            <p className="leading-relaxed mb-8 text-justify">
              The CTSC is the “Computer Technology Student Council”. In the
              Compufest we conduct various coding and computer science events
              that can be very helpful for our future. In addition to these we
              have our departmental technical newsletter called as the
              Technosavvy. Dhyaas is a platform for students where they can show
              their technical and creative sides. Students are always welcome to
              share their arts, poetry and articles, which are then published in
              DHYAAS
            </p>
          </div>
        </div>
      </section>
      <div className="flex px-5 py-12 items-center justify-center flex-col w-full">
        <div className="text-center lg:w-2/4 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Department of Computer Technology
          </h1>
          <div className="leading-relaxed mb-8 text-justify text-gray-600">
            The Department was established in 1985 and is accredited by National
            Board of Accreditation three times since 2003 and provides an
            outstanding Academic and Research environment complemented by
            excellence in teaching. The curricula of programmes have been
            designed to cater to the ever changing needs and demands of the IT
            industry as well as Research organizations with a proper blend of
            professional core and industry aligned electives. Department has NVIDIA Centre of Excellence lab having state of art hardware and licensed software to carry out  advanced research in the domains of IoT, AI,ML, DL,CV etc. The Department offers four different Thrust areas such as Artificial Intelligence, Data Science and Cloud Computing, Communication, Networks and Security, Image Processing under which various activities related to research and development are carried out.
            <div className="block text-left">
              <div className="font-bold text-xl text-center pt-4 text-gray-700">
                Vision of the Department
              </div>
              is to be a well-known center for pursuing computer education
              through innovative pedagogy, value-based education and industry
              collaboration.
            </div>
            <div className="block text-left">
              <div className="font-bold text-xl text-center pt-4 text-gray-700">
                Mission of the Department
              </div>
              is to establish learning ambience for ushering in computer
              engineering professionals in core and multidisciplinary arena by
              developing problem-solving skills through emerging technologies.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
