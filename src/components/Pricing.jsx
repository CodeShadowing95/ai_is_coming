import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { pricing } from "../constants";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="Stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
              <PricingList
                key={item.id}
                title={item.title}
                description={item.description}
                features={item.features}
                price={item.price}
              />
            ))}
          </div>
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
