import React from "react";

const RatingReview = ({ rating }: any) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            style={{
              cursor: "pointer",
              color: rating >= star ? "gold" : "grey",
              fontSize: `20px`,
            }}
            // onClick={() => {
            //   setRating(star);
            // }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default RatingReview;
