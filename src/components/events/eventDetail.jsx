import Icon from "@/icons/icons";

const EventDetail = (props) => {
  const event = props.event;
  const humanReadableDate = new Date(event.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-center">
        <h1 className="text-6xl">{event.title}</h1>
      </div>
      <div className="flex bg-cyan-900 p-6 rounded-lg">
        <div className="rounded-full border-2 overflow-hidden h-[25rem] w-[25rem]">
          <img
            src={event.image}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <div>
            <Icon name="IconClock" className="h-6 w-6 stroke-emerald-600" />
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <Icon name="IconLocation" className="h-6 w-6 stroke-emerald-600" />
            <address>{event.location}</address>
          </div>
        </div>
      </div>
      <div className="px-6">
        <p className="text-center">{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetail;
