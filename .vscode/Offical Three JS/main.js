import * as THREE from "three";

// this is for displaying errors on the webpage
window.onerror = function(message, source, lineno, colno, error) {
  const display = document.getElementById('error-display');
  display.style.display = 'block';
  display.innerHTML = `<strong>Error:</strong> ${message} <br> 
                      <strong>File:</strong> ${source} <br> 
                      <strong>Line:</strong> ${lineno}`;
  return false; // Prevents the error from showing in the console
};

// in public/static folder we put textures, audio, 3d models that are made outside of website
// install node.js
//instakk three.js and vite
// but can important from the web i think thats easier