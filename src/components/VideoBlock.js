import React from "react"
import Svg from "./base/Svg"

const VideoBlock = () => {
  return (
    <section className="bg-white py-8 xl:py-24">
      <div className="w-full xl:w-10/12 xl:mx-auto xl:flex xl:justify-between xl:px-16">
        <div className="w-full px-2 xl:w-1/2 xl:pr-8 xl:pl-0">
          <iframe
            className="w-full h-64 xl:h-88"
            src="https://www.youtube.com/embed/N3hie_oSOMY"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
            title="unique"
          ></iframe>
        </div>
        <div className="w-full mt-4 xl:mt-0 xl:w-1/2">
          <div className="w-full px-2 xl:px-0 xl:w-3/4">
            <h2 className="text-gray-600 uppercase font-medium text-xs tracking-wide">
              About us
            </h2>
            <h3 className="text-gray-900 font-normal text-3xl tracking-normal">
              World-class vacuum solutions giving you a clear edge
            </h3>
            <p className="text-gray-500  text-sm tracking-normal tracking-wide">
              We are a world leader in the manufacturing and supply of
              industrial vacuum systems and abatement solutions. Basic vacuum
              packaging machine for the food packaging of products with all
              shapes and dimensions. Available as a basic table-top model and as
              a full option vacuum packaging machine.
            </p>
            <button className="mt-6 uppercase flex rounded-lg bg-gray-400 px-5 py-3 items-center text-sm tracking-wide font-medium text-black hover:bg-gray-900 hover:text-white focus:outline-none">
              <p>Learn More</p>

              <Svg
                size={20}
                classes="fill-current"
                pathD="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoBlock
