import React from 'react';
import './App.css';
import ContextMaster from './components/ContextMaster';

function App() {

  const options = {
    method: 'get'
}

fetch('api/user/auth', options)
.then(function (res){
    return res.json()
})
.then(function (data) { 
  console.log(data)
}).catch(function (err) {
  console.log(err)
})

fetch('/api/post', options)
.then(function (res){
    if(res.status === 400) {
      return
    } 
    return res.json()
})
.then(function (data) { 
    console.log(data)
}).catch(function (err) {
    console.log(err)
})

  return (
   <ContextMaster />
  );
}

export default App;
