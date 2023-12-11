import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
  children?: React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (!user) {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) return <p></p>;

  return <div>{children}</div>;
};

export default AuthRoute;























// import React, {useEffect, useState } from 'react'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'

// export interface IAuthRouteProps{
//     children?: React.ReactNode;
// }
//  const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
//     const { children } = props;
//     const auth = getAuth();
//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(false)


//     useEffect(()=>{
//         AuthCheck();
//     }, [auth])
    
//     const AuthCheck = onAuthStateChanged(auth, (user)=>{
//          if (user){
//             setLoading(false)
//          }
//          else {
//             navigate('/')
//          }
//     })
//     if (loading) return <p>Loading...</p>
 

//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// export default AuthRoute;