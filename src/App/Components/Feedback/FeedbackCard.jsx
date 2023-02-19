import React from 'react'

const FeedbackCard = (props) => {
    const {review,rate,date} = props
  return (
    <>
      <div className="comment-author">
        {/* <span className="grade">Grade</span> */}
        <div className="star-content">
          {((avg) => {
            if (avg >= 0 && avg < 1) {
              return (
                <>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                </>
              );
            } else if (avg >= 1 && avg < 2) {
              return (
                <>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                </>
              );
            } else if (avg >= 2 && avg < 3) {
              return (
                <>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                </>
              );
            } else if (avg >= 3 && avg < 4) {
              return (
                <>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                </>
              );
            } else if (avg >= 4 && avg < 5) {
              return (
                <>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star icon-color-gray"></i>
                </>
              );
            } else {
              return (
                <>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                  <i className="ion-md-star"></i>
                </>
              );
            }
          })(rate)}
        </div>
        <div className="comment-author-info">
          <span className="title">{review}</span>

          <span className="date">{date}</span>
        </div>
      </div>
    </>
  );
}

export default FeedbackCard