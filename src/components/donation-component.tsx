import React from "react";
import { Button } from "./button";
import { PaymentLogos } from "./payment-logos";
import { tJSONData } from "../types/json";

export const DonationComponent = (props: any) => {
    const handleDonationType = (e: MouseEvent) => {
        const targetElement = e.target as HTMLButtonElement;
        if (targetElement === null) return;
        const donationType = targetElement.getAttribute('data-donation-type');
        if (donationType === null) return;

        // Set default `donationAmount` on change
        props.setData({
            donationAmount: donationType === "Single" ? Number(props.JSONData.single[0].amount) : Number(props.JSONData.regular[0].amount),
            donationType: donationType,
        });
    }

    const handleDonationAmount = (e: MouseEvent) => {
        const targetElement = e.target as HTMLButtonElement;
        if (targetElement === null) return;
        const donationAmount = Number(targetElement.getAttribute("data-value"));
        if (targetElement === null) return;

        props.setData({
            ...props.data,
            donationAmount: donationAmount
        });
    }

    const handleSubmit = (e: MouseEvent) => {
        console.log("user donation data -", props.data);
    }

    return (
        <div className="w-full md:w-6/12">
            <div className="bg-gray-nurse flex flex-col justify-center gap-4 h-full px-8 py-12 md:gap-8 md:min-h-screen md:p-24">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="max-w-min">Make a donation</h1>
                    <p className="text-2xl">Do something amazing</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="gap-2 grid grid-cols-2">
                        <Button
                            content="Single"
                            classes={`flex-auto button--secondary ${(props.data.donationType === "Single" ? 'is-active' : null)}`}
                            donationType="Single"
                            onClick={(e: MouseEvent) => { handleDonationType(e) }}
                        />
                        <Button
                            content="Regular"
                            classes={`flex-auto button--secondary ${(props.data.donationType === "Regular" ? 'is-active' : null)}`}
                            donationType="Regular"
                            onClick={(e: MouseEvent) => { handleDonationType(e) }}
                        />
                    </div>
                    <div className="gap-2 grid-cols-4 grid md:grid-cols-2 xl:grid-cols-4">
                        {props.data.donationType === 'Single' && <>
                            {props.JSONData.single.map((item: tJSONData, index: number) => {
                                return <Button
                                    key={index}
                                    content={item.content}
                                    classes={`flex-auto button--secondary ${(props.data.donationAmount === item.amount ? 'is-active' : null)}`}
                                    dataValue={item.amount}
                                    onClick={(e: MouseEvent) => { handleDonationAmount(e) }}
                                />
                            })}
                        </>
                        } {props.data.donationType === 'Regular' && <>
                            {props.JSONData.regular.map((item: tJSONData, index: number) => {
                                return <Button
                                    key={index}
                                    content={item.content}
                                    classes={`flex-auto button--secondary ${(props.data.donationAmount === item.amount ? 'is-active' : null)}`}
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
    );
}