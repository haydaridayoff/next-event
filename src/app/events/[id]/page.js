"use client";

import { useParams } from "next/navigation";
import EventDetail from "@/components/events/eventDetail";
import { getEventById } from "@/dummy-data";

const EventDetailPage = () => {
  const { id } = useParams();
  const event = getEventById(id);

  return (
    <>
      <section>
        <EventDetail event={event} />
      </section>
    </>
  );
};

export default EventDetailPage;
