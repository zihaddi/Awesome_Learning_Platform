import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvoder/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PremiumAccess.css'



const PremiumAccess = () => {
  const course = useLoaderData()
  const user = useContext(AuthContext)
  const loadCheckoutToast = () => toast("Checkout Successfully!");
 
  //console.log(course , user)
  return (
    <div>
      <h2 className='mb-5'>Premium Access</h2>
      <div className='d-flex'>
      <h5 className='me-2 bd'> {user?.user?.displayName}</h5> <p>have accessed the Course :</p> <h5 className='ms-2 bd'> {course[0].title}</h5>
      </div>
      
      <br />
      <button onClick={loadCheckoutToast} className='btn btn-primary mt-5'>Checkout</button>
      <ToastContainer />
    </div>
  );
};

export default PremiumAccess;