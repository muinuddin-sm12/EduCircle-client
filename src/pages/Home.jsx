import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import HomeCard from "../components/HomeCard";
import ScrollToTop from "../components/ScrollToTop";
const Home = () => {
    return (
        <div className="min-h-[calc(100vh-369px)]">
            <ScrollToTop/>
            <Banner/>
            <HomeCard/>
            <Feature/>
            <Faq/>
        </div>
    );
};

export default Home;