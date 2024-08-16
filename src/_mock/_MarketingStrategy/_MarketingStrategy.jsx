import { TiLightbulb } from "react-icons/ti";
import { PiMapPinLineBold } from "react-icons/pi";
import { TiFlagOutline } from "react-icons/ti";
import { LuPlane } from "react-icons/lu";

export const _MarketingStrategy = [
  {
    title: "Our Online Marketing Strategy",
    text: "​​​​​​​The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.",
    icon: <TiLightbulb />,
  },
  {
    title: "Local Exposure",
    text: "Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.",
    icon: <PiMapPinLineBold />,
  },
  {
    title: "National Exposure",
    text: "We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.",
    icon: <TiFlagOutline />,
  },
  {
    title: "International Exposure",
    text: "To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK",
    icon: <LuPlane />,
  },
];

import realTor from "../../assets/svg/Realtor.com_logo.png";
import truliaLogo from "../../assets/svg/Trulia_Logo.png";
import zillow from "../../assets/svg/Zillow_logo.svg.png";

export const partnersLogo = [
  {
    svg: <img src={realTor} alt="Realtor" />,
  },
  {
    svg: <img src={truliaLogo} alt="Trulia" />,
  },
  {
    svg: <img src={zillow} alt="Zillow" />,
  },
];
