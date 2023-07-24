import { useNavigate } from 'react-router-dom';
import sadCloud from '../icons/sad-cloud.png';
const NotFound = () => {
    const history= useNavigate();
    return ( 
        <div className="notFound d-flex flex-column align-items-center gap-3">
            <img className='not-found-img' src={sadCloud} alt="" />
            <p className="fs-2 fw-bold title">Not Found !</p>
                    </div>
    );
}
export default NotFound;