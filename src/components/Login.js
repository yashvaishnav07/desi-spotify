import React from 'react'
import Logo from "../components/Logo";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import ThirdPartyAuthButton from "../components/Buttons/ThirdPartyAuthButton";
import FormInput from "../components/FormInput";
import Link from "../components/Link";
import { useNavigate } from "react-router-dom";
import { routes } from '../shared/routes';


const authProviders = [
  {
    icon: faGoogle,
    name: "Google",
  },
  {
    icon: faFacebook,
    name: "Facebook",
  },
  {
    icon: faApple,
    name: "Apple",
  },
];

export default function Login() {
  const navigate = useNavigate();

  const getAuthorized = async () => {
    const clientId = process.env.REACT_APP_CLIENT_ID_PRE
    const scope = ['user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing','user-read-playback-position', 'user-top-read', 'user-read-recently-played', 'user-read-email', 'user-read-private']
    const redirectUrl = "http://localhost:3000/desi-spotify"
    const apiUrl = "https://accounts.spotify.com/authorize"

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&scope=${scope}&show_dialog=true`;
  }

  return (
    <div className="min-h-screen flex flex-col items-stretch font-body bg-black md:bg-gradient-to-b md:from-zinc-900 md:to-black">
      <header className="py-12 md:py-8 px-8 md:px-12 md:mb-8 bg-black">
        <nav>
          <a href="/" className="outline-none">
            <Logo className="w-20 md:w-28" />
          </a>
        </nav>
      </header>

      <main className="self-center w-full max-w-[46rem] flex flex-col items-stretch gap-8 px-8 md:px-28 md:py-20 pb-20 md:rounded-lg bg-black">
        <h1 className="text-3xl text-white md:text-[2.9rem] md:text-center md:mb-7 font-extrabold">
          Log in to Spotify
        </h1>

        <div className="flex flex-col gap-2 md:px-[5.5rem]">
          {authProviders.map((provider) => (
            <ThirdPartyAuthButton
              key={provider.name}
              icon={provider.icon}
              provider={provider.name}
            />
          ))}
        </div>

        <hr className="border-t-[1px] border-zinc-800" />

        <form
          className="flex flex-col gap-5 md:px-[5.5rem]"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(routes.HOME);
          }}
        >
          <FormInput
            type="text"
            id="username"
            name="username"
            hintText="Email or username"
          />

          <FormInput
            type="password"
            id="password"
            name="password"
            hintText="Password"
          />

          <button className='mt-5 text-white' onClick={getAuthorized}>Log In</button>
        </form>

        <div className="flex flex-col gap-5 items-center text-center text-white">
          <Link to="#" text="Forgot your password ?" />

          <hr className="hidden md:block w-full border-t-[1px] mb-6 border-zinc-800" />

          <div className="flex flex-col gap-1 md:gap-2 md:flex-row">
            <p className="text-zinc-400">Don&apos;t have an account?</p>
            <Link to="#" text="Sign up for Spotify" />
          </div>
        </div>
      </main>
    </div>
  );
}
