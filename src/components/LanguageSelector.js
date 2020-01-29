import React from "react"
import Dropdown from "./Dropdown"

const LanguageSelector = () => {
  const options = [
    { value: "EN", text: "EN" },
    { value: "DE", text: "DE" },
    { value: "NL", text: "NL" },
  ]

  return (
    <div className="px-4 text-xs">
      <Dropdown
        id="languageSelector"
        name="languageSelector"
        selectClassName="bg-white"
        options={options}
      />
    </div>
  )
}

export default LanguageSelector
