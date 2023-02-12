import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="text-center">
          <div className="spinner-grow text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5>Loading....</h5>
        </div>
    </>
  )
}

export default Loader
