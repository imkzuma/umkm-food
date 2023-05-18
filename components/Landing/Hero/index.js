import HeroComponent from "./Hero";
import HeroSearch from "./HeroSearch";

export default function LandingHero(){
    return(
        <>
            <HeroComponent />
            <HeroSearch 
                marginTop = {'-70px'}
            />
        </>
    )
}