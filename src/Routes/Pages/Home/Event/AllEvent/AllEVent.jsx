import React from 'react'
import Titel from '../../../../../Componets/SectionTitel/Titel'
import img1 from '../../../../../assets/event pic/1.jpg'
import { Helmet } from 'react-helmet-async'
import Cover from '../../../Shared/Cover/Cover'
import ContactImg from '../../../../../assets/event pic/1.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function AllEVent() {
    return (

        <>
            <div>
                <Helmet>
                    <title>Hope Hues | Event</title>
                </Helmet>
                <Cover img={ContactImg} titel='contact us' subTitel='how are you men'></Cover>
            </div>
            <div className='my-8 py-8 rounded-md'>
                {/* <div>
                    <Titel
                        heading={'Our Causes & Help Us'}
                        button={'View All'}>
                    </Titel>
                </div> */}
                <div className='grid grid-cols-2 mg:grid-cols-2 lg:grid-cols-4 gap-4 items-center'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={img1} alt="Shoes" width="100%" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Give Food to Homeless Children</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>
                        <div className="flex justify-between hover:bg-neutral w-100% p-4 rounded-xl">
                            <button className="btn text-white px-4 font-semibold rounded-full bg-green-500 border-0 btn-sm">SHARE</button>
                            <button className="btn text-white px-4 font-semibold rounded-full bg-green-500 border-0 btn-sm">VIEW </button>
                        </div>
                    </div>
                </div>
            </div ></>
    )
}
