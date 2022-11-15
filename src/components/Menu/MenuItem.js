import { Link } from "react-scroll";

import { randomRgbaColor  } from "../utils";

function MenuItem({ name, Icon, to}) {
    return ( 
        <Link 
            className="container"
            to={to}
            smooth={true}
            duration={500}
        >
            <Icon className="icon" style={{color: randomRgbaColor(1)}}/>
            <span>{name}</span>
        </Link>
    );
}

export default MenuItem;