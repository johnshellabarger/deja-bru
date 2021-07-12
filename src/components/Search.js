import React from 'react'

const Search = ({ handleChange }) => {
    return (
        <div>
        <form>
          <input
            name="areaCode"
            onChange={handleChange}
            type='number'
          />
          <button type="submit">Submit Area Code</button>
        </form>
      </div>
    )
}

export default Search
