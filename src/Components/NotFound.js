import { useNavigate } from 'react-router-dom';
import sadCloud from '../icons/sad-cloud.png';
const NotFound = () => {
    return ( 
        <div className="notFound d-flex flex-column align-items-center gap-3">
            <img className="col-3" src={sadCloud} alt="" />
            <p className="fs-2 fw-bold title">Not Found !</p>
                    </div>
    );
}
export default NotFound;