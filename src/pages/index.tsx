import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import { Button } from "../components/button";
import { PaymentLogos } from "../components/payment-logos";

interface IJSONData {
  amount: Number;
  content: string;
}

import JSONData from "../data/donation-amounts.json";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const showVariation = params.get("showVariation");
  // Set defaults
  const [data, setData] = useState({
    donationType: "Single",
    donationAmount: Number(JSONData.single[0].amount ?? 5.00)
  });

  const handleDonationType = (e: MouseEvent) => {
    const targetElement = e.target as HTMLButtonElement;
    if (targetElement === null) return;
    const donationType = targetElement.getAttribute('data-donation-type');
    if (donationType === null) return;

    // Set default `donationAmount` on change
    setData({
      donationAmount: donationType === "Single" ? Number(JSONData.single[0].amount) : Number(JSONData.regular[0].amount),
      donationType: donationType,
    });
  }

  const handleDonationAmount = (e: MouseEvent) => {
    const targetElement = e.target as HTMLButtonElement;
    if (targetElement === null) return;
    const donationAmount = Number(targetElement.getAttribute("data-value"));
    if (targetElement === null) return;

    setData({
      ...data,
      donationAmount: donationAmount
    });
  }

  const handleSubmit = (e: MouseEvent) => {
    console.log("user donation data -", data);
  }

  return (
    <main className="container flex flex-wrap mx-auto overflow-hidden rounded-lg lg:flex-row">
      <div className={`relative w-full md:w-6/12 ${showVariation ? 'order-1' : null}`}>
        <img
          alt="Alt text"
          className="min-h-64 object-cover w-full md:h-full"
          src="/images/donation-photo.jpg"
        />
      </div>
      <div className="w-full md:w-6/12">
        <div className="bg-gray-nurse flex flex-col justify-center gap-4 h-full min-h-screen px-8 py-12 md:gap-8 md:p-24">
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="max-w-min">Make a donation</h1>
            <p className="text-2xl">Do something amazing</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="gap-2 grid grid-cols-2">
              <Button
                content="Single"
                classes={`flex-auto button--secondary ${(data.donationType === "Single" ? 'is-active' : null)}`}
                donationType="Single"
                onClick={(e: MouseEvent) => { handleDonationType(e) }}
              />
              <Button
                content="Regular"
                classes={`flex-auto button--secondary ${(data.donationType === "Regular" ? 'is-active' : null)}`}
                donationType="Regular"
                onClick={(e: MouseEvent) => { handleDonationType(e) }}
              />
            </div>
            <div className="gap-2 grid-cols-4 grid md:grid-cols-2 xl:grid-cols-4">
              {data.donationType === 'Single' && <>
                {JSONData.single.map((item: IJSONData, index: number) => {
                  return <Button
                    key={index}
                    content={item.content}
                    classes={`flex-auto button--secondary ${(data.donationAmount === item.amount ? 'is-active' : null)}`}
                    dataValue={item.amount}
                    onClick={(e: MouseEvent) => { handleDonationAmount(e) }}
                  />
                })}
              </>
              } {data.donationType === 'Regular' && <>
                {JSONData.regular.map((item: IJSONData, index: number) => {
                  return <Button
                    key={index}
                    content={item.content}
                    classes={`flex-auto button--secondary ${(data.donationAmount === item.amount ? 'is-active' : null)}`}
                    dataValue={item.amount}
                    onClick={(e: MouseEvent) => { handleDonationAmount(e) }}
                  />
                })}
              </>
              }
            </div>
          </div>
          <div className="flex">
            <Button
              content="Donate"
              classes="flex-1 button--primary"
              onClick={(e: MouseEvent) => { handleSubmit(e) }}
            />
          </div>
          <PaymentLogos />
        </div>
      </div>
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
