import logoImage from '../../public/logo.svg'; 

const Logo = ({ ...props }) => (
  <a href="https://nextjs.org" aria-label="Next.js Link">
              <img
                src="/logo.png"
                alt="Next.js Logo"
                width = "32"
                height = "32"
              />
  </a>
  // <svg
  //   width="32"
  //   height="32"
  //   viewBox="0 0 32 32"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  //   {...props}
  // >
  //   <rect width="100%" height="100%" rx="16" fill="white" />
  //   <image href={logoImage} x="0" y="0" width="32" height="32" />
  // </svg>
);

export default Logo;
