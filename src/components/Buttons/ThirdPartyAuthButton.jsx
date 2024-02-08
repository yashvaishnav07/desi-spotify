import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BorderedButton from "./BorderedButton";

export default function ThirdPartyAuthButton({ icon, provider }) {
  return (
    <BorderedButton className="flex gap-6 px-8 py-3 font-bold text-white">
      <FontAwesomeIcon size="lg" icon={icon} />
      <span className="mx-auto text-white">Continue with {provider}</span>
    </BorderedButton>
  );
}
