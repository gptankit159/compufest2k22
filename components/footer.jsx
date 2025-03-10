import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="flex items-center justify-center w-full">
      {/* <a
        className="flex items-center justify-center"
        href="https://seebham.codes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img
          src="/assets/logo.svg"
          alt="Vercel Logo"
          className="h-10 ml-2 text-white"
        />
      </a> */}
      <div className="bg-gray-800 bg-opacity-75 w-full">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a
            onClick={scrollToTop}
            className="cursor-pointer flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <img alt="logo" src="/assets/logo.svg" className="h-10" />
            <span className="ml-3 text-xl">Compufest</span>
          </a>
          <p className="text-sm text-gray-300 sm:ml-6 sm:mt-0 mt-4 text-center">
            © 2022 Compufest — Developed by
            <a
              href="https://seebham.codes"
              className="text-gray-400 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @seebham
            </a>{" "}
            and
            <a
              href="https://twitter.com/Swnnd"
              className="text-gray-400 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @swnnd
            </a>{" | "}
            Redesigned & Developed By
            <a
              href="www.linkedin.com/in/gpt-ankit"
              className="text-gray-400 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @gpt-ankit
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
            <a
              href="https://www.acm.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="acm logo" src="/assets/imgs/acm.png" className="h-16" />
            </a>
            <img alt="CTSC logo" src="/assets/imgs/CTSC.png" className="h-16" />
            <a
              href="https://www.ycce.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="ycce logo"
                src="/assets/imgs/ycce.png"
                className="h-16"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
