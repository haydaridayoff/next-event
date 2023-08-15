import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div className="absolute top-0">
        <nav className="bg-zinc-900 text-green-300 flex justify-evenly items-center py-4 fixed w-full h-16">
          <Link href="/" className="font-bold text-4xl">
            NextEvent
          </Link>
          <Link href="/events" className="text-xl">
            Browse All Event
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Topbar;
