import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
    const router = useRouter();

    const loadProjectHandler = () => {
        // do some action
        router.push('/clients/max/project-a');
    };

    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
};

export default ClientProjectsPage;