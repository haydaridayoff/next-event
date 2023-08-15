// import all icons.svg in this folder
// then create a map of all icons
// then create a component that takes a name and returns the icon
// then export the component
//

import IconClock from "./clock.svg";
import IconLocation from "./location.svg";
import IconDate from "./date.svg";
import IconRight from "./right.svg";

const icons = {
  IconClock,
  IconLocation,
  IconDate,
  IconRight,
};

export default function Icon({ name, className }) {
  if (!icons[name]) {
    return null;
  }

  //add class to the icon
  const Icon = icons[name];

  if (className) {
    return <Icon className={className} />;
  }

  //retun a small icon
  return <Icon className="h-6 w-6 stroke-lime-200" />;
}

// Path: src\components\event-detail\event-content.js
