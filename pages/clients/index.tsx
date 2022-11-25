import Link from 'next/link';
const ClientsPage = () => {
    type clientsInterface = { id: string, name: string }[]
    const clients: clientsInterface = [
        { id: 'max', name: 'Maximillian' },
        { id: 'manu', name: 'Manuel' },
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        <Link href={`/clients/${client.id}`}>{client.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientsPage;