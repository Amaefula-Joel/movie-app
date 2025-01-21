import { Link } from "react-router-dom";

import '../styles/footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="app-footer text-dark py-4">
                <div className="container-lg">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-12 mb-3 mb-md-0 text-md-left text-center">
                            <h5 className="mb-0">MovieFlix</h5>
                        </div>

                        <div className="col-md-4 col-12 mb-3 mb-md-0 text-md-center text-center">
                            <ul className="list-unstyled d-flex justify-content-center mb-0" style={ {gap: '14px'} }>
                                <li><Link to="/" className="links text-decoration-none"><i className="fa fa-facebook me-2"></i> <span className="sr-only">Facebook</span> </Link></li>
                                <li><Link to="/" className="links text-decoration-none"><i className="fa fa-twitter me-2"></i><span className="sr-only">Twitter</span></Link></li>
                                <li><Link to="/" className="links text-decoration-none"><i className="fa fa-instagram me-2"></i><span className="sr-only">Instagram</span></Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-12 text-md-right text-center">
                            <p className="mb-0">&copy; Copyright 2025.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;