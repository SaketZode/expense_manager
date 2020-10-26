import { Component, React } from "react";
import home from '../images/home.jpg'


class Home extends Component {
    state = {

    }

    render() {
        return(
            <div>
                <img src={home} alt='Image not found' className="img-fluid img-thumbnail" style={{width:1348}}/>
            </div>
        )
    }
}


export default Home