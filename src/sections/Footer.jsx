const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Adebayotoheeb666/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="Github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://x.com/splusplus111" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="Twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/splusplus111/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Adebayo Toheeb. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
