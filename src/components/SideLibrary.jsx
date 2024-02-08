import SectionContainer from "./SectionContainer";
import RoundedButton from "./Buttons/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots, faPlus } from "@fortawesome/free-solid-svg-icons";
import CircularButton from "./Buttons/CircularButton";
import Playlists from "./Playlists";

export default function SideLibrary() {
  return (
    <SectionContainer className="h-full justify-stretch items-stretch">
      <div className="relative flex justify-between items-center px-5 py-4">
        <RoundedButton className="flex gap-3 items-center px-2 py-1 text-neutral-400 hover:text-white transition-colors duration-300">
          <FontAwesomeIcon icon={faListDots} />
          Your Library
        </RoundedButton>

        <CircularButton className="w-8 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faPlus} />
        </CircularButton>
      </div>
      <div className="px-6">
        <Playlists />
      </div>
    </SectionContainer>
  );
}
