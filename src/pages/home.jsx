import '/background.png';
import { Link } from 'react-router-dom';
import RecentProjects from '../components/RecentProjects';

const HomePage = function () {
    return (
        <div className="flex-grow overflow-auto container mx-auto mt-24 justify-center content-start lg:px-48 md:px-16">
            <div className="block lg:grid grid-cols-2">
                <div className="content-center p-4">
                    <div className="flex content-center justify-center">
                        <img src="/me.png" alt="profile picture" className="w-48 h-48 md:w-60 md:h-60 rounded-full"/>
                    </div>
                    <div className="justify-center pt-4">
                        <ul className="text-left px-4">
                            <li className="font-base text-base lg:text-lg items-end">
                                <p className="inline font-medium text-black dark:text-white">
                                    Hi, i'm <b className="text-xl lg:text-3xl italic">Trevor Lichfield,</b>
                                    a Cloud & Devops Engineer, utilizing my development experience, and love of operations, to reduce the workload of maintaining and deploying software products.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center content-center mx-5 md:mx-10">
                    <div className="my-auto flex flex-col h-fit">
                        <p className="text-5xl p-2 text-center text-black dark:text-white font-mono">
                            <Link to="/projects" className="hover:font-bold">./projects</Link>
                        </p>
                        <p className="text-5xl p-2 text-center text-black dark:text-white font-mono">
                            <Link to="/about" className="hover:font-bold">./about</Link>
                        </p>
                        <p className="text-5xl p-2 text-center text-black dark:text-white font-mono">
                            <a href="https://github.com/lichfiet" className="hover:font-bold">./github</a>
                        </p>
                        <p className="text-5xl p-2 text-center text-black dark:text-white font-mono">
                            <a href="https://www.linkedin.com/in/trevorlichfield/" className="hover:font-bold">./linkedin</a>
                        </p>
                    </div>
                </div>
            </div>
            <hr className="bg-black h-0.5 px-4 dark:bg-white w-full my-6"/>
            <RecentProjects />
        </div>
    );
};

export default HomePage;
