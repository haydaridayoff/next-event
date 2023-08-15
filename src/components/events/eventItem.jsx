import React from "react";
import Link from "next/link";
import Button from "../ui/button";
import Icon from "@/icons/icons";

const EventItem = (props) => {
  const { event } = props;

  const humanReadableDate = new Date(event.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = event.location.replace(", ", "\n");

  return (
    <li className="bg-slate-800 flex shadow-md rounded overflow-hidden">
      <div className="w-2/3 h-full overflow-hidden">
        <img src={event.image} alt="" className="object-cover h-full w-auto" />
      </div>
      <div className="flex flex-col w-full p-4 shadow-md gap-4">
        <div className="flex flex-col h-full">
          <h2 className="font-bold text-xl mb-6">{event.title}</h2>
          <div className="flex mb-3 font-bold gap-1 text-base text-gray-300 h-fit">
            <Icon name="IconClock" />
            <time className="flex-end">{humanReadableDate}</time>
          </div>
          <div className="flex gap-1 text-gray-300 h-full">
            <Icon name="IconLocation" />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <Button>
            <Link href={`/events/${event.id}`}>Explore Event</Link>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
