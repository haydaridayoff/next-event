import EventItem from "./eventItem";

const EventList = (props) => {
  const { events } = props;

  return (
    <>
      <ul className="grid grid-cols-1 bg-slate-100 lg:grid-cols-2  p-4 shadow-xl border-4 border-blue-100 rounded-md mx-4 gap-4">
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </>
  );
};

export default EventList;
