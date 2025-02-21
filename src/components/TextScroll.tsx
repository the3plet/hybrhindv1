import datas from "../../data.json";

const TextScroll = () => {
  return (
    <div className="relative w-full overflow-hidden my-1">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

      <div className="flex animate-horizontal-scroll whitespace-nowrap">
        {datas.scrollText.map((data, index) => (
          <div
            key={index}
            className="font-AudioWide text-gray-600 text-4xl whitespace-nowrap px-10"
          >
            {data.title}
          </div>
        ))}
        {/* Duplicate data for seamless scrolling */}
        {datas.scrollText.map((data, index) => (
          <div
            key={`duplicate-${index}`}
            className="font-AudioWide text-gray-600 text-4xl whitespace-nowrap px-10"
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextScroll;
