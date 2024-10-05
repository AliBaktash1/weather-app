
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className='mt-[3rem]'>
    <hr />
    <p className='text-center p-2'> <img src={logo} alt="" className='inline-block w-6 h-6 ml-4' />ساخته شده در <span><a href="" className="text-blue-600">استارکوچ</a></span></p>
  </footer>
  );
};

export default Footer;
