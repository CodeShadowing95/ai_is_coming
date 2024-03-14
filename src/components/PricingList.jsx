import { check } from "../assets";
import Button from "./Button";

const PricingList = ({ title, description, features, price }) => {
  return (
    <div className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
      <h4 className="h4 mb-4">{title}</h4>

      <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{description}</p>

      <div className="flex items-center h-[5.5rem] mb-6">
        {price && (
          <>
            <div className="h3">$</div>
            <div className="text-[5.5rem] leading-none font-bold">{price}</div>
          </>
        )}
      </div>

      <Button
        className="w-full mb-6"
        href={price ? "/pricing" : "mailto:contact@jsmastery.pro"}
        /* The expression `white={!!price}` turns the price value into a boolean so that
        when price isn't null, it's true else it's false */
        white={!!price}
      >
        {price ? "Get started" : "Contact us"}
      </Button>

      <ul>
        {features.map((feature, index) => (
          <li key={index} className="flex items-start py-5 border-t border-n-6">
            <img src={check} alt="Check" width={24} height={24} />
            <p className="body-2 ml-4">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingList;
