import { useParams } from 'react-router';
import useAppData from '../useHook/useAppData';
import { BallTriangle, DNA } from 'react-loader-spinner';

const DetailsPage = () => {
    const { appData, loader } = useAppData();
    const { id } = useParams();

    if (loader) {
        return <DNA></DNA>;
    }

    const expectedApp = appData.find((app) => String(app.id) === String(id));

   

    return (
        <div>
            <h1>{expectedApp.title}</h1>
        </div>
    );
};

export default DetailsPage;