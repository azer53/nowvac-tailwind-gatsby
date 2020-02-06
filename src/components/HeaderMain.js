import React from "react"
import LanguageSelector from "./LanguageSelector"
import CurrencySelector from "./CurrencySelector"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const HeaderMain = ({ intl }) => {
  return (
    <div className="hidden xl:block bg-white h-15 text-gray-900 font-bold text-sm">
      <nav className="xl:w-10/12 mx-2 xl:mx-auto flex items-center h-full">
        <div className="w-2/12">
          <Link to="/">
            <img
              className="w-40"
              src="https://nowvac.ljft.de/assets/img/logo.png"
              alt=""
            />
            <span className="text-xs font-hairline text-gray-500">
              Earth's biggest vacuum store
            </span>
          </Link>
        </div>
        <div className="w-7/12 flex uppercase">
          <Link
            to="/"
            className="pr-12 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            <FormattedMessage id="nav.home" />
          </Link>
          <Link
            to="/brands"
            className="pr-12 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            <FormattedMessage id="nav.brands" />
          </Link>
          <Link
            to="/applications"
            className="pr-12 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            <FormattedMessage id="nav.applications" />
          </Link>
          <Link
            to="/products"
            className="pr-12 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            <FormattedMessage id="nav.products" />
          </Link>
          <Link
            to="/service"
            className="pr-12 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            <FormattedMessage id="nav.service" />
          </Link>
          <Link
            to="/contact"
            className="pr-12 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            <FormattedMessage id="nav.contact_us" />
          </Link>
        </div>
        <div className="w-3/12 flex ml-auto justify-end">
          <LanguageSelector />
          <CurrencySelector />
          <Link to="/login" className="text-gray-500 px-4 text-xs">
            Login
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default injectIntl(HeaderMain)
