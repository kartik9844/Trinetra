import React from 'react';
import HeaderTop1 from "../components/HeaderTop1";
import StartupForm from '../components/startf';

function Register() {
  return (
    <div className="container mx-auto p-4">
      <HeaderTop1 />
      <h1 className="text-2xl font-bold mb-4 text-center justify-self-center">Startup Registration Form</h1>
      <StartupForm />
    </div>
  );
}

export default Register;