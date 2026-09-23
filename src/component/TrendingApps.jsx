import React, { use } from 'react';
import { CgLayoutGrid } from 'react-icons/cg';

const TrendingApps = ({appsPromise}) => {
    const appData = use(appsPromise);
    // console.log(appData);
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Trending apps</h2>
                <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nobis cum laboriosam odit nostrum praesentium doloremque sapiente debitis accusantium soluta.</p>
            </div>
            {

            }
        </div>
    );
};

export default TrendingApps;