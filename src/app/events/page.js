import EventList from "@/components/events/eventList";
import FilterEventList from "@/components/filter/filter";
import { getAllEvents } from "@/dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <>
      <section className="mt-16">
        <FilterEventList />
      </section>
      <section className="mt-4">
        <EventList events={events} />
      </section>
    </>
  );
};

export default AllEventsPage;
