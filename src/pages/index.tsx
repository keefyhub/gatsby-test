import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import { FeaturedImage } from "../components/featured-image";
import { DonationComponent } from "../components/donation-component";

import JSONData from "../data/donation-amounts.json";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const locationSearch = new URLSearchParams(location.search);
  const showVariation = locationSearch.get("showVariation") as unknown as boolean;
  
  // Set defaults
  const [data, setData] = useState({
    donationType: "Single",
    donationAmount: Number(JSONData.single[0].amount ?? 5.00)
  });

  return (
    <main className="container flex flex-wrap mx-auto overflow-hidden rounded-lg lg:flex-row">
      <FeaturedImage showVariation={showVariation} />
      <DonationComponent data={data} setData={setData} JSONData={JSONData} />
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () =>
  <>
    <html lang="en" />
    <title>Hatch donation component</title>
    <meta name="description" content="Meta description" />
    <body className="font-dmsans bg-white p-4" />
  </>
