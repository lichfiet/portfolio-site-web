import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Make sure to import useState
import './background.css';


export function NavBar() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(prefersDarkMode ? "dark" : "light");

    let navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");

    function handleChange(value) {
        setSelectedOption(value);
    }

    useEffect(() => {
        if (selectedOption) {
            navigate(`/${selectedOption}`);
        }
    }, [selectedOption, navigate]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={`${theme === 'light' ? "backgroundLightMode" : "backgroundDarkMode" } flex flex-col min-h-screen ${theme} text-black dark:text-gray-300`}>
            <div className="fixed bottom-0 p-2">
                {
                    /* THEME TOGGLE BUTTON */
                    theme === "light" ? (
                        <button className="p-2 rounded-full bg-white outline outline-black outline-1">
                            <i className="h-4 w-6 text-xl fa-solid fa-sun" onClick={() => setTheme("dark")}></i>
                        </button>
                    ) : (
                        <button className="p-2 rounded-full bg-neutral-800 outline outline-white outline-1 flex justify-center items-center">
                            <i className="h-6 w-6 text-xl fa-solid fa-moon" onClick={() => setTheme("light")}></i>
                        </button>
                    )}
            </div>
            { /* NAVIGATION BAR FOR LARGER SCREENS */}
            <div className="p-6 justify-center items-center">
                <nav className="container flex flex-row items-center md:space-x-4 dark:bg-neutral-800 bg-neutral-200 text-gray-800 p-3 px-4 lg:px-9 rounded-3xl shadow-xl w-full mx-auto">
                    <a onClick={() => handleChange("home")} className="text-md md:text-lg font-bold dark:text-gray-300  cursor-pointer">
                        trevor lichfield
                    </a>
                    <ul className="flex space-x-4 ">
                        <li className="hidden md:block text-gray-800">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("home") }} className="dark:text-gray-300 hover:text-gray-400 hidden md:block">
                                home
                            </a>
                        </li>
                        {/* <li className="hidden md:block">
                            <a href="#" onClick={() => handleChange("work-experience")} className="text-gray-800 hover:text-gray-400 hidden md:block">
                                work
                            </a>
                        </li> */}
                        <li className="hidden md:block text-gray-800">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("projects") }} className="dark:text-gray-300 hover:text-gray-400 hidden md:block">
                                projects
                            </a>
                        </li>
                        <li className="hidden md:block text-gray-800">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("about") }} className="dark:text-gray-300 hover:text-gray-400 hidden md:block">
                                about
                            </a>
                        </li>
                        <li className="hidden md:block text-gray-800">
                            <a className="dark:text-gray-300 hover:text-gray-400 hidden md:block" href="https://github.com/lichfiet">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>


                        <li className="hidden md:block text-gray-800">
                            <a className="dark:text-gray-300 hover:text-gray-400 hidden md:block" href="https://www.linkedin.com/in/tlichfield/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>

                        <li className="hidden md:block text-gray-800">
                            <a className="dark:text-gray-300 hover:text-gray-400 hidden md:block" href="/resume.pdf" download="resume.pdf">
                                <i className="fa fa-file-pdf"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="ml-auto mr-2 md:hidden text-gray-800">

                        <li className="md:hidden">
                            <i className="text-black dark:text-gray-300 hover:text-gray-400 fa-solid fa-bars" onClick={handleMenuToggle}></i>
                        </li>
                    </ul>
                </nav>
            </div >


            {
                /* MENU FOR SMALLER SCREENS */
            }
            {isMenuOpen && (
                <div onClick={handleMenuToggle} className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
                    <ul className="flex flex-col space-y-4 text-center">
                        <li>
                            <i className="fa-solid fa-x text-6xl text-white hover:text-gray-400" onClick={handleMenuToggle}></i>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("home"); handleMenuToggle() }} className="text-6xl text-white hover:text-gray-400">
                                home
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("about"); handleMenuToggle() }} className="text-6xl text-white hover:text-gray-400">
                                about
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("projects"); handleMenuToggle() }} className="text-6xl text-white hover:text-gray-400">
                                projects
                            </a>
                        </li>
                        <li>
                            <a href="/resume.pdf" download="resume.pdf" onClick={handleMenuToggle} className="text-6xl text-white hover:text-gray-400">
                                <i className="fa fa-file-pdf"></i> resume
                            </a>
                        </li>
                    </ul>
                </div>
            )}
            <div className="flex flex-grow overflow-auto">
                <Outlet />
            </div>

        </div>
    );
}

export default NavBar;