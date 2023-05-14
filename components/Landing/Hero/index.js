import HeroComponent from "./Hero";
import HeroSearch from "./HeroSearch";

export default function LandingHero(){
    return(
        <>
            <HeroComponent />
            <HeroSearch 
                marginTop = {{ base: '-70px' }}
            />
        </>
    )
}