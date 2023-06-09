import '../../css/Footer.css';
// import styles from './Footer.module.css'


    const Footer = () => {
        
    return (

    <div>

        <footer>
            <p className="footlogo">naturalstrength!</p>
            <div className="contact">
                <a href="#none" className="contactchannel"><i className="fa-solid fa-square-phone" title="Phone: +48 50X 0XX XYZ"></i></a>
                <a href="mailto:tadoe@tadoe.pl" className="contactchannel"><i className="fa-solid fa-square-envelope" title="Mail to: tadoe@tadoe.pl"></i></a>
                <a href="https://github.com/tadeg/website-design" className="contactchannel"><i className="fa-brands fa-square-github" title=""></i></a>
                <a href="#none" className="contactchannel"><i className="fa-brands fa-linkedin" title=""></i></a>
                <a href="#none" className="contactchannel"><i className="fa-brands fa-square-facebook" title=""></i></a>
                <a href="#none" className="contactchannel"><i className="fa-brands fa-square-instagram" title=""></i></a>
                <a href="#none" className="contactchannel"><i className="fa-brands fa-square-twitter" title=""></i></a>
                <a href="#none" className="contactchannel"><i className="fa-brands fa-square-youtube" title=""></i></a>
                <a href="#none" className="contactchannel"><i className="fa-brands fa-square-dribbble" title=""></i></a>
            </div>
            <p className='notes'>&copy; 2023 naturalstrength!; Created by: tadoe</p>
        </footer>

    </div>
    );
}
export default Footer;