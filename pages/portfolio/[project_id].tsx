import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
    const router = useRouter();
    
    console.log(router.pathname); // /portfolio/[projectid]
    console.log(router.query); // {projectid: 'plane'} -- when visiting /portfolio/plane

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    );
};

export default PortfolioProjectPage;