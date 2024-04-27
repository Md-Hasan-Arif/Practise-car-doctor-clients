
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
           
           <div className="hero-content flex-col  lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl"/> 
                <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"/> 
                </div>
                <div className='lg:w-1/2 space-y-3 p-4 '>
                    <h3 className='text-3xl text-orange-600 font-bold'>About us</h3>

                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>

                    <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>

                     <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
                    <button className="btn btn-primary">Get More info</button>
                </div>
            </div>

        </div>
    );
};

export default About;