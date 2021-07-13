import React from 'react'

const Search = ({ handleChange, handleSubmit }) => {
    return (
        <div className='ui action input'>
          <input
            className='ui input'
            name="areaCode"
            onChange={handleChange}
            type='number'
          />
          <button onClick={handleSubmit} className='ui button' type="submit">Submit Zip Code</button>
      </div>
    )
}

export default Search
