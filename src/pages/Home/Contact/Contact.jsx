import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="bg-black my-32">
            <p className="text-white text-3xl font-semibold py-24 text-center">Call Us: <Link to="tel:+88 0192345678910">+88 0192345678910</Link></p>
        </div>
    );
};

export default Contact;