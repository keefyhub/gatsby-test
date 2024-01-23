import React from "react";

export const PaymentLogos = () => {
    return (
        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
            <div className="order-1 md:order-none">
                <img
                    src="/images/svgs/fundraising-regulator.svg"
                    width="77.87px"
                    height="23.82px"
                    alt="Fundraising regulator logo"
                />
            </div>
            <div className="flex flex-wrap gap-4 xl:flex-nowrap">
                <img src="/images/svgs/visa.svg" alt="Visa logo" />
                <img src="/images/svgs/master-card.svg" alt="Master card logo" />
                <img src="/images/svgs/apple-pay.svg" alt="Apple pay logo" />
                <img src="/images/svgs/google-pay.svg" alt="Google pay logo" />
                <img src="/images/svgs/paypal.svg" alt="Paypal logo" />
            </div>
        </div>
    );
}