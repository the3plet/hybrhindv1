import data from '../../data.json';

const IconScroll = () => {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

      <p className='flex text-center text-xs md:text-sm justify-center px-7 text-[#535353]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis soluta id in quibusdam odio repellendus magni? Fugiat, velit.  From the house of</p>
      <div className="overflow-hidden whitespace-nowrap relative w-full">
        <div className="flex animate-horizontal-scroll gap-14">
          {/* Map the icons twice to ensure seamless scrolling */}
          {data.icons.concat(data.icons).map((icon, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 h-20 flex items-center justify-center mx-4 "
            >
              <img
                src={icon.iconPath}
                alt={icon.name}
                title={icon.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconScroll;
