import Button from "../../components/Buttons/Button";
import Banner from "../../components/Banners/Banner";
import Services from "../../components/Services/Services";
import active_services from "../../mock/Services";
import SliderCard from "../../components/Slider/SliderCard/SliderCard";
import sliders from "../../mock/Sliders";
import Slider from "../../components/Slider/Slider";
import articles from "../../mock/Articles";
import Articles from "../../components/Articles/Articles";

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

  const serviceButton: IButton = {
    text: "Learn more",
    filling: false,
  };

  const articleButtonCollapsed: IButton = {
    text: "View more",
    filling: false,
  };

  const articleButtonUncollapsed: IButton = {
    text: "Hide",
    filling: false,
  };

  const slide_list = Array.from(sliders, (slider_card, _) => (
    <SliderCard slider_card={slider_card} />
  ));

  return (
    <>
      <Banner
        banner_info={mainBanner}
        button={<Button button_info={consultButton}></Button>}
        style={{ margin: "5.25rem 0 0 0" }}
      />
      <Services
        header={"Our services"}
        description={
          "We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo \
          treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        }
        active_services={active_services}
        button={<Button button_info={serviceButton}></Button>}
        style={{ margin: "10rem 0 0 0", padding: "0 5rem" }}
      />
      <Banner
        banner_info={leadingProvidersBanner}
        button={<Button button_info={leadingButton}></Button>}
        style={{ margin: "14rem 0 0 0", padding: "0 5rem" }}
      />
      <Banner
        banner_info={mobileBanner}
        button={<Button button_info={mobileButton}></Button>}
        style={{ margin: "14rem 0 0 0", padding: "0 5rem" }}
      />
      <Slider
        slides={slide_list}
        style={{ margin: "16rem 0 0 0", padding: "0 3rem" }}
      />
      <Articles
        header={"Check out our latest article"}
        articles={articles}
        buttons={[articleButtonCollapsed, articleButtonUncollapsed]}
        style={{ margin: "10rem 0 0 0", padding: "0 5rem" }}
      />
    </>
  );
}

export default Home;
