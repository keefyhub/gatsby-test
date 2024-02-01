import React from "react";

type Props = {
  showVariation: boolean | null;
}

export const FeaturedImage = (props: Props) => {
  return (
    <div className={`relative w-full md:w-6/12 ${props.showVariation ? 'order-1' : null}`}>
      <img
        alt="Alt text"
        className="min-h-64 object-cover w-full md:h-full"
        src="/images/donation-photo.jpg"
      />
    </div>
  );
}