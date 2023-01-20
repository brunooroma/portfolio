import './Footer.css'

const Footer = () => {
  return (
    <>
      <div
        className="text-center p-3 divFooter"
        style={{ backgroundColor: "rgb(33,37,41)", color: "white" }}
      >
        &copy; {new Date().getFullYear()} Copyright: Bruno Roma
  
      </div>
    </>
  );
};

export default Footer;
