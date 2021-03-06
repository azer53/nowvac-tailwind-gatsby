import React from "react"

const FacetFilteredValue = ({ filterValue }) => {
  return (
    <li className="mb-2 px-2 py-1 bg-gray-200 rounded-lg w-auto hover:bg-gray-400">
      <div className="flex text-sm font-normal tracking-wide">
        <p>{filterValue}</p>
        <p className="ml-2">x</p>
      </div>
    </li>
  )
}

export default FacetFilteredValue
