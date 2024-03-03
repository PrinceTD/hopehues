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
import { GoTriangleRight } from 'react-icons/go'


export default function AllEVent() {
    return (

        <>
            <div>
                <Helmet>
                    <title>Hope Hues | Event</title>
                </Helmet>
                <Cover img={ContactImg} titel='Our Activity' subTitel=''></Cover>
            </div>
            <div className='my-8 py-8 rounded-md'>
                <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-4 items-center p-4'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={img1} alt="Shoes" width="100%" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Give Food to Homeless Children</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>

                        <div className='flex p-4 hover:text-green-500 items-center'>
                            <GoTriangleRight className='' />
                            <h2 className='px-2'>
                                Read More
                            </h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={img1} alt="Shoes" width="100%" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Give Food to Homeless Children</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>

                        <div className='flex p-4 hover:text-green-500 items-center'>
                            <GoTriangleRight className='' />
                            <h2 className='px-2'>
                                Read More
                            </h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={img1} alt="Shoes" width="100%" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Give Food to Homeless Children</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>

                        <div className='flex p-4 hover:text-green-500 items-center'>
                            <GoTriangleRight className='' />
                            <h2 className='px-2'>
                                Read More
                            </h2>
                        </div>
                    </div>
                </div>
            </div ></>
    )
}
