import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';



const Banner = () => {
    return (
        <div className="carousel w-full">

            {/* slide 1 */}

            <div id="slide1" className="carousel-item relative w-full h-[400px]">
                <img src={img1} className="w-full rounded-xl" />

                <div className="absolute rounded-xl flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='text-white space-y-7 w-1/2 pl-12 '>
                        <h2 className='font-bold text-4xl '>Affordable Price For Car Servicing</h2>
                        <p className='  '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-2'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>

                    </div>
                </div>

                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>

            {/* slide 2 */}

            <div id="slide2" className="carousel-item relative w-full  h-[400px]">
                <img src={img2} className="w-full" />

                <div className="absolute flex rounded-xl items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='text-white space-y-7 w-1/2 pl-12 '>
                        <h2 className='font-bold text-4xl '>Affordable Price For Car Servicing</h2>
                        <p className='  '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-2'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide 3 */}

            <div id="slide3" className="carousel-item relative w-full  h-[400px]">
                <img src={img3} className="w-full" />

                <div className="absolute flex rounded-xl  items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='text-white space-y-7 w-1/2 pl-12 '>
                        <h2 className='font-bold text-4xl '>Affordable Price For Car Servicing</h2>
                        <p className='  '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-2'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide 4 */}

            <div id="slide4" className="carousel-item relative w-full  h-[400px]">
                <img src={img4} className="w-full" />

                <div className="absolute flex rounded-xl  items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='text-white space-y-7 w-1/2 pl-12 '>
                        <h2 className='font-bold text-4xl '>Affordable Price For Car Servicing</h2>
                        <p className='  '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-2'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide 5 */}

            <div id="slide5" className="carousel-item relative w-full h-[400px]">
                <img src={img5} className="w-full" />

                <div className="absolute flex rounded-xl  items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='text-white space-y-7 w-1/2 pl-12 '>
                        <h2 className='font-bold text-4xl '>Affordable Price For Car Servicing</h2>
                        <p className='  '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-2'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>

                    </div>c
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide 6 */}

            <div id="slide6" className="carousel-item relative w-full  h-[400px]">
                <img src={img6} className="w-full" />
                            <div className="absolute flex rounded-xl  items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <div className='text-white space-y-7 w-1/2 pl-12 '>
                        <h2 className='font-bold text-4xl '>Affordable Price For Car Servicing</h2>
                        <p className='  '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-2'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-primary">Latest Project</button>
                        </div>

                    </div>c
                </div>
                 
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>



        </div>
    );
};

export default Banner;