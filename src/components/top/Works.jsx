// Framework
// import React from 'react';

// Library
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

// Style
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "../../styles/top/_works.scss";

// Data
import worksList from "../../data/works.json"

const Works = () => {
    return (
        <>
            <div className="section works -open" id="works">
                <h2 className="section__title">Works</h2>
                <div className="swiper-container">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        modules={[Navigation, Scrollbar]}
                        scrollbar={{
                            el: '.works__scrollbar',
                        }}
                        navigation={{
                            nextEl: '.works__next',
                            prevEl: '.works__prev',
                        }}
                    >
                        {worksList.map(data =>
                            <SwiperSlide className="swiper-slide work">
                                <div className="work__inner">
                                    {
                                        data.url
                                            ? <a href={data.url} target="_blank" className="work__thumb js-works-thumb"><img src={data.thumb} alt={data.title} /></a>
                                            : <div className="work__thumb"><img src={data.thumb} alt={data.title} /></div>
                                    }
                                    <div className="work__content">
                                        <h5 className="work__subtitle">{data.subtitle}</h5>
                                        <h4 className="work__title">{data.title}</h4>
                                        <p className="work__role">{data.role}</p>
                                        <p className="work__desc">{data.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <button className="works__prev js-works-prev">
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.375 31L1 15.5802L15.375 0.375" stroke="#ECECEC" />
                        </svg>
                    </button>
                    <button className="works__next js-works-next">
                        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.624999 0.374999L15 15.7948L0.625004 31" stroke="#ECECEC" />
                        </svg>
                    </button>
                    <div className="works__scrollbar"></div>
                </div>
            </div>
        </>
    );
};

export default Works;

// <!-- <div className="section works" id="works">
//     <h2 className="section__title">Works</h2> 
//     <p className="works__desc">
//         パスワードをお持ちでない方は<a href="#contact" className="works__link">お問合せ</a>ください。
//     </p>

//     <input type="password" className="input works__input" placeholder="Password">
//     <button className="button -orange">OK</button>
// </div> -->