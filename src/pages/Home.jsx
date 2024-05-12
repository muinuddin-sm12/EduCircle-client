
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Feature from "../components/Feature";



const Home = () => {
    return (
        <div className="min-h-[calc(100vh-369px)]">
            <Banner/>
            <Feature/>
            <Faq/>
        </div>
    );
};

export default Home;