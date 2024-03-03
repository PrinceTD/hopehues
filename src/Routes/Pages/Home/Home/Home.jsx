import React from 'react'
import Banner from '../Banner/Banner'
import Event from '../Event/Event'
import Featured from '../Featured/Featured'
import Contact from '../../Contact/Contact'
import { Helmet } from 'react-helmet-async'
import Card from '../About/Card'
import HomeIntro from './Home Intro/HomeIntro'
import Review from '../../Review/Review'
import VoluteerID from '../About/Voluteer/VoluteerID'
import HomeEvent from '../Event/HomeEvent/HomeEvent'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Hope Hues | Home</title>
            </Helmet>
            <Banner></Banner>
            <HomeIntro></HomeIntro>
            <Card></Card>
            <HomeEvent></HomeEvent>
            <Featured></Featured>
            {/* <Review></Review> */}
            <VoluteerID></VoluteerID>
            {/* <Maps></Maps> */}

        </>
    )
}
