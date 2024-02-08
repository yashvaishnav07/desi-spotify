import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import SectionContainer from './SectionContainer';
import Navbar from './Navbar'
import Footer from './Footer/Footer';
import { useDispatch } from "react-redux";
import { addToken } from "../utils/userSlice";
import Footerrrr from './Footerrrr';

const Body = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = window.location.hash.substring(1).split('&')[0].split('=')[1]
    dispatch(addToken(token));
  });
  return (
    <div className="h-screen min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-2 bg-black">
      <Sidebar />

      <SectionContainer className="overflow-auto relative bg-local bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900">
        <header className="sticky top-0 px-7 py-5 bg-[hsla(0,0%,7%,0.7)] mb-[-4rem] z-50">
          <Navbar />
        </header>

        <main>
          <Outlet />
        </main>

        <Footer />
      </SectionContainer>

      <aside className="col-span-2 flex justify-between items-center bg-gradient-to-r from-accent-1 to-accent-2 px-4 py-3 text-white" >
        {/* <p>
            <span className="block text-sm tracking-wider">
              PREVIEW OF SPOTIFY
            </span>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
  
          <SecondaryButton href="#" className="px-8 py-3">
            Sign up free
          </SecondaryButton> */}
        <Footerrrr />
      </aside>
    </div>
  );
}

export default Body