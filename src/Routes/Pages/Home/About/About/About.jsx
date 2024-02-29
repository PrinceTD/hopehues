import { Helmet } from "react-helmet-async"
import Cover from "../../../Shared/Cover/Cover"
import aboutC from '../../../../../assets/cover banner/about.jpg'
import AboutIntro from "./AboutIntro/AboutIntro"
import Card from "../Card"
import VoluteerID from "../Voluteer/VoluteerID"

function About() {
    return (
        <>
            <Helmet>
                <title>Hope Hues | About</title>
            </Helmet>
            <Cover img={aboutC} titel='About us' subTitel=''></Cover>
            <AboutIntro></AboutIntro>
            <Card></Card>
            <VoluteerID></VoluteerID>
        </>
    )
}

export default About