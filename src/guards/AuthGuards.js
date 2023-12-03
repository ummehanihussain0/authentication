import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({component}) => {
    const [status, setStatus] = useState(false);
  const navigate = useNavigate();

    useEffect(() => {
        console.log("Auth Guard");
        checkToken();
    }, []);

    const checkToken = async () => {
        try {
          let user = ''
          if (!user) {
            navigate(`/login`);
          }
          setStatus(true);
          return;
        } catch (error) {
          navigate(`/login`);
        }
      }

      return status ? <React.Fragment>{component}</React.Fragment> : <React.Fragment></React.Fragment>;
}

export default AuthGuard;