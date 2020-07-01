import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';

function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;
