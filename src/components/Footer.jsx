// import { Link } from "react-router-dom";

// import '../styles/footer.css';

import { Footer } from "flowbite-react";

const FooterComponent = () => {

    const customTheme = {
        root: {
            base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
                container: "w-full p-6",
                    bgDark: "bg-gray-800"
        },
        groupLink: {
            base: "flex flex-wrap text-sm text-gray-700 dark:text-gray-300",
                link: {
                base: "me-4 last:mr-0 md:mr-6",
                    "href": "hover:underline"
            },
            col: "flex-col space-y-4"
        },
        // "icon": {
        //     "base": "text-gray-500 dark:hover:text-white",
        //         "size": "h-5 w-5"
        // },
        title: {
            base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
        },
        divider: {
            base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
        },
        copyright: {
            base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
                href: "ml-1 hover:underline",
                    span: "ml-1"
        },
        brand: {
            base: "mb-4 flex items-center sm:mb-0",
                img: "mr-3 h-8",
                    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
        }
    }

    return (
        <Footer container theme={customTheme}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="https://flowbite.com"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="MovieFlix Logo"
                            name="MovieFlix"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">About MovieFlix</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="MovieFlix" year={2025} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        {/* <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} /> */}
                    </div>
                </div>
            </div>
        </Footer>
    );

    // return (
    //     <div>
    //         <footer className="app-footer text-dark py-4">
    //             <div className="container-lg">
    //                 <div className="row align-items-center">
    //                     <div className="col-md-4 col-12 mb-3 mb-md-0 text-md-left text-center">
    //                         <h5 className="mb-0">MovieFlix</h5>
    //                     </div>

    //                     <div className="col-md-4 col-12 mb-3 mb-md-0 text-md-center text-center">
    //                         <ul className="list-unstyled d-flex justify-content-center mb-0" style={ {gap: '14px'} }>
    //                             <li><Link to="/" className="links text-decoration-none"><i className="fa fa-facebook me-2"></i> <span className="sr-only">Facebook</span> </Link></li>
    //                             <li><Link to="/" className="links text-decoration-none"><i className="fa fa-twitter me-2"></i><span className="sr-only">Twitter</span></Link></li>
    //                             <li><Link to="/" className="links text-decoration-none"><i className="fa fa-instagram me-2"></i><span className="sr-only">Instagram</span></Link></li>
    //                         </ul>
    //                     </div>

    //                     <div className="col-md-4 col-12 text-md-right text-center">
    //                         <p className="mb-0">&copy; Copyright {new Date().getFullYear()}.</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </footer>
    //     </div>
    // );
}

export default FooterComponent;