import React from "react"
import Svg from "./base/Svg"

const FooterBar = () => {
  return (
    <div className="bg-gray-900 text-gray-500 text-xs py-3">
      <section className="xl:hidden w-full">
        <img
          className="w-32 mx-auto my-4"
          src="https://nowvac.ljft.de/assets/img/logo.png"
          alt=""
        />
      </section>
      <div className="mx-2 xl:w-10/12 xl:mx-auto flex flex-col-reverse items-center xl:flex-row xl:justify-between">
        <section>
          <p>
            All rights reserved. <strong>© 2018 NowVac.</strong>
          </p>
        </section>
        <section className="my-2 xl:my-0">
          {/* TODO: Create Simple List Component */}
          <ul className="flex items-center">
            <li className="pr-4">
              <a href="/">Disclaimer</a>
            </li>
            <li className="pr-4">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="pr-4">
              <a href="/">Contact</a>
            </li>
            <li className="pr-4">
              <a href="/">Cookies</a>
            </li>
          </ul>
        </section>
        <section className="flex">
          <Svg
            classes="w-4 h-4 fill-current mr-4"
            pathD="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
          />

          <Svg
            classes="w-4 h-4 fill-current mr-4"
            pathD="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"
          />

          <Svg
            classes="w-4 h-4 fill-current mr-4"
            pathD="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </section>
      </div>
    </div>
  )
}

export default FooterBar
