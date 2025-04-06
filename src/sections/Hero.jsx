import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';
import { calculateSizes } from '../constants/index.js';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace '/path/to/your-cv.pdf' with the actual path to your CV file
    const cvUrl = '/path/to/your-cv.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Paul-CV.pdf'; // The filename you want for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8 px-4 sm:mt-36 mt-20">
        {/* Text content - floats left */}
        <div className="flex-1 flex flex-col gap-3">
          <p className="sm:text-3xl text-xl font-medium text-white text-center sm:text-left font-generalsans">
            Hi, I am Paul <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient text-center sm:text-left">
            Your vision, my code - let's build something amazing together
          </p>
        </div>

        {/* Image - floats right */}
        <div className="flex-1">
          <img 
            src="/assets/hero-img.png" 
            alt="Paul's Portfolio" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#about" className="w-full sm:w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
          <button 
            onClick={handleDownloadCV}
            className="w-full sm:w-fit px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300 font-medium"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;