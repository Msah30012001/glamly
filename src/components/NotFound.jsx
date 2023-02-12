import React from 'react'

const NotFound = () => {
    const style = {
        h1: {
        fontSize: "140px",
        fontWeight: 500,
        paddingTop: "130px",
        marginBottom: "10x"
      },
      h2: {
        fontSize: "45px",
        color: "white",
        fontWeight: 200
      }
    }
  return (
    <>
    <div id="content" className="bg-dark text-center">
      <h1 style={style.h1}>404</h1>
      <h2 style={style.h2}>File Not Found</h2>
      <button className="btn btn-link pb-70">Back To Home</button>
    </div>
    </>
  )
}

export default NotFound