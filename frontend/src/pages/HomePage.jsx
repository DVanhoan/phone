import { Slider } from "../components/common/Slider";
import { ProductList } from "../components/common/ProductList";
import { PopularSection } from "../components/common/PopularSection";

const HomePage = () => {
    return (
        <>
            <Slider />
            <PopularSection />
            <ProductList />
        </>
    );
};

export default HomePage;
