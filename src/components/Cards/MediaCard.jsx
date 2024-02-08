import PlayCard from "./PlayCard";

export default function MediaCard({ name, description, imgUrl }) {
  const head = (
    <img
      src={imgUrl}
      className="rounded-[0.25rem] shadow-lg shadow-neutral-950 mb-5"
    />
  );

  const body = (
    <div>
      <p className="font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-white">
        {name}
      </p>

      <p className="h-[3rem] overflow-hidden text-mute text-[#6a6a6a]">{description}</p>
    </div>
  );

  return (
    <PlayCard head={head} body={body}>
      {body}
    </PlayCard>
  );
}
