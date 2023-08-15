import Topbar from "@/components/topbar/Topbar";
import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage = () => {
  const events = getFeaturedEvents();

  return (
    <>
      <section className="pt-24">
        <EventList events={events} />
      </section>
    </>
  );
};

export default HomePage;
