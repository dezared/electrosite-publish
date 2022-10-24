import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import Container from "../components/others/Container";
import Bar from '../components/Bar'
import HeaderText from '../components/others/HeaderText'
import FormContact from '../components/FormContact'
import { Navigation } from 'swiper';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from "axios"

function Blog() {
    const { id } = useParams();

    const [blog, setBlog] = useState(undefined);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.elitestroyservice.ru/api/application/admin/allBlogs/' + id
        })
            .then(function (response) {
                setBlog(response.data)
                return Promise.resolve();
            });
    }, []);

    return (
        <div>
                <div>
                    <div className="header finisher-header" style={{ width: '100%' }}>
                        <Bar></Bar>
                    <Container>
                            <div>
                            {blog != undefined &&
                                <div>
                                    <motion.div
                                        className="blogContainer"
                                        initial={{ x: "-100px", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                    >
                                        <div className="blogImage"><img src={blog.mainImageUrl} /></div>
                                    <div className="blogName">{blog.name}</div>
                                        <p className="blogText" dangerouslySetInnerHTML={{ __html: blog.text }} />
                                    </motion.div>
                                </div>
                                }
                            </div>
                            <br />
                            <HeaderText>Мы свяжемся с вами</HeaderText>
                        </Container>
                    </div>
                    <FormContact />
                    <div className='footer-outer'>
                        <Container>
                            <div className='footer-outer'>
                                <p>ЭЛИТСТРОЙСЕРВИС</p><p className='mobile-off'>ets@elitestroyservice.ru</p>
                                <p>2022г.</p>
                            </div>
                        </Container>
                    </div>
                </div>
        </div>
    )
}

export default Blog;