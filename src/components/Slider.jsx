import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";


const Slider = () => {
    return (
        <div className="">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide className="min-h-[calc(100vh-350px)]">
                    <div className="flex flex-col lg:flex-row items-center justify-center h-full px-5">
                        <Slide direction="down">
                            <img className="lg:w-xl xl:w-3xl" src="https://i.ibb.co.com/xK5vMB9X/11345217.png" alt="Slide 1" />
                        </Slide>
                        <div className="space-y-5 lg:space-y-10 text-center lg:text-left">
                            <Slide direction="right">
                                <h3 className="text-3xl lg:text-5xl font-semibold ">⚽ Unleash Your Inner Athlete</h3>
                            </Slide>
                            <Fade delay={200} duration={4000}>
                                <p className="text-base lg:text-xl">Get top-quality gear for football, basketball, cricket, and more. Play harder, perform better, and reach new heights!</p>
                            </Fade>
                            <button className="inline-block font-medium items-start">
                                <Link to={'/all-products'} className="flex items-center border px-5 py-2 rounded-4xl hover:border-blue-500 border-orange-500 gap-2 hover:gap-4 transition-all duration-300">Explore More<FaArrowRightLong /></Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide className="">
                    <div className="flex flex-col lg:flex-row items-center justify-center h-full px-5 text-center lg:text-left">
                        <Slide direction="up" className="lg:w-3xl">
                            <img className=" w-full" src="https://i.ibb.co.com/RGBvtHV9/fashion-shoes-sneakers.png" alt="Slide 1" />
                        </Slide >
                        <div className="space-y-5 lg:space-y-10">
                            <Slide direction="down">
                                <h3 className="text-3xl lg:text-5xl font-semibold">🚴‍♂️ Push Your Limits</h3>
                            </Slide>
                            <Fade cascade>
                                <p className="text-base lg:text-xl">Whether it's running, cycling, or weightlifting, we’ve got the best equipment to keep you at your peak performance!</p>

                            </Fade>
                            <button className="inline-block font-medium">
                                <Link to={'/all-products'} className="flex items-center border px-5 py-2 rounded-4xl hover:border-blue-500 border-orange-500 gap-2 hover:gap-4 transition-all duration-300">Explore More<FaArrowRightLong /></Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide className="">
                    <div className="flex flex-col lg:flex-row items-center justify-center h-full text-center lg:text-left">
                        <Slide direction="down">
                            <img className="lg:w-xl xl:w-3xl" src="https://i.ibb.co.com/xK5vMB9X/11345217.png" alt="Slide 1" />
                        </Slide>
                        <div className="space-y-5 lg:space-y-10">
                            <Slide direction="right">
                                <h3 className="text-3xl lg:text-5xl font-semibold">🎯 Your Game, Your Rules</h3>
                            </Slide>
                            <Fade duration={4000}>
                                <p className="text-base lg:text-xl">Choose from a wide range of sports essentials tailored to your needs. Shop now and take your skills to the next level!</p>
                            </Fade>
                            <button className="inline-block font-medium">
                                <Link to={'/all-products'} className="flex items-center border px-5 py-2 rounded-4xl hover:border-blue-500 border-orange-500 gap-2 hover:gap-4 transition-all duration-300">Explore More<FaArrowRightLong /></Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;