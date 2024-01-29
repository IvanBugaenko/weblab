// import { MainBanner, PairBanner } from "../../components/Banners";
import Button from "../../components/Buttons/Button";
import Banner from "../../components/Banners/Banner";

function Home() {
  const mainBanner: IBanner = {
    header: "Virtual healthcare for you",
    description:
      "Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone",
    illustration: String.raw`src\assets\images\illustrations\banner1.png`,
    divider: false,
  };

  const leadingProvidersBanner: IBanner = {
    header: "Leading healthcare providers",
    description:
      "We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    illustration: String.raw`src\assets\images\illustrations\banner2.png`,
    divider: true,
  };
  const mobileBanner: IBanner = {
    header: "Download our mobile apps",
    description:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
    illustration: String.raw`src\assets\images\illustrations\banner3.png`,
    divider: true,
  };

  const consultButton: IButton = {
    text: "Consult today",
    filling: true,
  };

  const leadingButton: IButton = {
    text: "Learn more",
    filling: false,
  };

  const mobileButton: IButton = {
    text: "Download ↓",
    filling: false,
  };

  return (
    <>
      <Banner
        banner_info={mainBanner}
        button={<Button button_info={consultButton}></Button>}
        style={{margin: '5.25rem 0 0 0'}}
      />
      <Banner
        banner_info={leadingProvidersBanner}
        button={<Button button_info={leadingButton}></Button>}
        style={{margin: '14rem 0 0 0', padding: '0 5rem'}}
      />
      <Banner
        banner_info={mobileBanner}
        button={<Button button_info={mobileButton}></Button>}
        style={{margin: '14rem 0 0 0', padding: '0 5rem'}}
      />
    </>
  );
}

export default Home;
