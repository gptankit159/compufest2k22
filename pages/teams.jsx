import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  acmTeam,
  ctscTeam,
  designTeam,
  literaryTeam,
  StudentCoordinators,
  technicalTeam,
} from "../data/teamsData";

const Member = ({ photo, name, subtitle }) => {
  return (
    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={photo ? photo : "/assets/imgs/portraits/defaultAvatar.jpg"}
        />
        <div className="flex-grow">
          <h2 className="text-white title-font font-medium">{name}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <>
      <Head>
        <title>Our Teams</title>
      </Head>
      <main className="min-h-screen text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto h-full flex flex-col">
          <div className="flex flex-col h-full text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white relative">
              Our Teams
              <div className="absolute top-0">
                <Link href="/">
                  <a className="text-lg inline-flex items-center gap-2 px-2 py-1 rounded-md bg-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-left"
                    >
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Back
                  </a>
                </Link>
              </div>
            </h1>
          </div>
          <div className="mb-16">
            <div className="text-lg text-gray-200 font-bold px-2 pb-2">
              Student Co-ordinators
            </div>
            <div className="flex flex-wrap -m-2 flex-1">
              {StudentCoordinators &&
                StudentCoordinators.map((mem) => (
                  <Member key={mem.name} {...mem} />
                ))}
            </div>
          </div>
          <div className="mb-16">
            <div className="text-lg text-gray-200 font-bold px-2 pb-2">
              ACM Student Chapter
            </div>
            <div className="flex flex-wrap -m-2 flex-1">
              {acmTeam &&
                acmTeam.map((mem) => <Member key={mem.name} {...mem} />)}
            </div>
          </div>
          <div className="mb-16">
            <div className="text-lg text-gray-200 font-bold px-2 pb-2">
              Computer Technology Student Council
            </div>
            <div className="flex flex-wrap -m-2 flex-1">
              {ctscTeam &&
                ctscTeam.map((mem) => <Member key={mem.name} {...mem} />)}
            </div>
          </div>
          <div className="text-lg text-gray-200 font-bold px-2 pb-2">
            Technical Team
          </div>
          <div className="flex flex-wrap -m-2 flex-1 mb-16">
            {technicalTeam &&
              technicalTeam.map((mem) => <Member key={mem.name} {...mem} />)}
          </div>
          <div className="mb-16">
            <div className="text-lg text-gray-200 font-bold px-2 pb-2">
              Design Team
            </div>
            <div className="flex flex-wrap -m-2 flex-1">
              {designTeam &&
                designTeam.map((mem) => <Member key={mem.name} {...mem} />)}
            </div>
          </div>
          <div className="text-lg text-gray-200 font-bold px-2 pb-2">
            Literary Team
          </div>
          <div className="flex flex-wrap -m-2 flex-1">
            {literaryTeam &&
              literaryTeam.map((mem) => <Member key={mem.name} {...mem} />)}
          </div>
        </div>
      </main>
    </>
  );
};

export default Teams;
