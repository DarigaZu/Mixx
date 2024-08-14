import './main.scss'
import { Link } from 'react-router-dom';
import img_1 from '../../images/mix_25.png'
import img_2 from '../../images/mix_18.jpg'
import img_3 from '../../images/mix_24.png'

function Category(){
    return(
        <div className='category'>
            <div className="category_text">
               
            <Link to='/shoes'><p style={{left:'0.3%'}}>SHOES</p></Link>
            <Link to='/tshirt'><p style={{left:'34%'}}>T-SHIRTS</p></Link>
            <Link to='/shorts'><p style={{left:'67.4%'}}>SKIRTS AND SHORTS</p></Link>
            </div>

            <div className="category_img">
            <Link to='/shoes'><img src={img_1}/></Link>
            <Link to='/tshirt'><img src={img_2}/></Link>
            <Link to='/shorts'><img src={img_3}/></Link>
            </div>
            </div>
    )
}

export default Category;