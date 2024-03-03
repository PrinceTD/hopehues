import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../Shared/Cover/Cover'

import ContactImg from '../../../assets/cover banner/2.jpg'

function Blog() {
    return (
        <>
            <div>
                <Helmet>
                    <title>Hope Hues | Blog</title>
                </Helmet>
                <Cover img={ContactImg} titel='Our Blog' subTitel=''></Cover>
            </div>
            <div>

            </div>
        </>
    )
}

export default Blog