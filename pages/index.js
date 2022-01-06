import Features from "../components/Features";
import Header from "../components/Header";
import ImgSection from "../components/ImgSection";
import BusinessFeatures from "../components/BusinessFeatures";
import CovidNote from "../components/CovidNote";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <ImgSection
        theme="first-hero-Img"
        label="New"
        imgSrc="/images/main.webp"
        heading="Designed for life today – and tomorrow"
        description="The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love."
        btnTitle="See if your PC is ready"
      />
      <Features />
      <ImgSection
        theme="second-hero-Img"
        imgSrc="/images/outlook.webp"
        heading="Outlook for iOS and Android"
        description="Connect. Organise. Get things done."
        btnTitle="Download now"
      />
      <BusinessFeatures title="For business" />
      <CovidNote />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Home;
