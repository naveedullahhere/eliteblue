import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const SingleBlog = () => {

    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);
    const singleBlog = params.singleBlog;


    useEffect(() => {
        fetch(`https://eliteblue.net/e-panel/api/single-blog/${singleBlog}`)
            .then((response) => response.json())
            .then((actualData) => { setIsLoading(false); setData(actualData.data); setImg(actualData.media_path); })
            .catch((err) => {
                setData([]);
                setIsLoading(false);
                toast.error("Sonething went wrong!");
            });
    }, []);

    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <div className='sec py-5'>
                {data.id &&
                    <div className="container text-start">
                        <div className="row">
                            <div className="col-md-6 my-3">
                                <img src={`${img}/${data.image}`} alt="singleBlog" className='w-100 rounded-4' />
                            </div>
                            <div className="col-md-6 my-md-auto my-3">
                                <h6 className="heading mb-3" >
                                    {data.title}
                                </h6>
                                <p className="para-sm" dangerouslySetInnerHTML={{ __html: data.short_description }}>
                                </p>
                            </div>
                            <div className="col-md-12 my-3">
                                <p className="para-sm" dangerouslySetInnerHTML={{ __html: data.long_description }}>
                                </p>
                            </div>
                        </div>
                    </div>
                }
                {
                    isLoading && <div className="row">
                        <div className="col-12 text-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </motion.div>
    )
}
