import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Link} from 'react-router-dom';
import Admin from './Admin';
import Users from './Users';
import Dashboard from './Dashboard';
import Category from './Category';
import Roles from './Roles';
import SubCategory from './SubCategoty';
import Retailers from './Retailers';
import logo1 from './logo1.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

function SecondPage() {

   
  return (
<>    
<div className="fullpage">
    
     <div className="container-fluid">
         <div className="row">

            <Col className=" col-12 bg-dark logo-div " xs={2} md={2}>
                <img id='logo' src={logo1} alt="" />
            </Col>

            <Col className="col-12 bg-dark heading" xs={10} md={10}>
            <h1 className='text-white text-center pt-4'>Tailor Town</h1>
            <p style={{fontFamily:'TimesNewRoman'}} className='text-white text-center' >Kaam Wahi Soch Nayi</p>
            </Col>
 
        </div>



        <Row style={{backgroundColor:'yellow',marginRight:'-25px', marginLeft:'-25px'}}>
             <Col style={{backgroundColor:'black'}} sm={2}>
               
                  <ul className='list-unstyled'>
                  
        
                         <li className='text-center mt-4'> <Link className='sidebar-content text-white text-decoration-none' to="/"> <h4> Women </h4></Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/admin">Admin</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/users">Users</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/roles">Roles</Link> </li> 
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/category">Category</Link> </li> 
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/subcategory">Sub-Category</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/retailers">Retailers</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/customers">Customers</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/offerzone">Offer Zone</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/thirdpartyproduct">Third Party Product</Link> </li>
                 
                  </ul>
                
         </Col>



            <Col className="col-8 bg-white content-area" sm={9} md={10}>
           
               <Routes>
                 <Route path='/' element={<Dashboard/>} />
                 <Route path='/admin' element={<Admin/>} />
                 <Route path='/users' element={<Users/>} />
                 <Route path='/roles' element={<Roles/>} />
                 <Route path='/category' element={<Category/>} />
                 <Route path='/subcategory' element={<SubCategory/>} />
                 <Route path='/retailers' element={<Retailers/>} />
               </Routes>
             
            </Col>
 
        </Row>









         
     </div>
    
    
    
    
    
    
    
    
    
    
</div>
</>
  )
}

export default SecondPage