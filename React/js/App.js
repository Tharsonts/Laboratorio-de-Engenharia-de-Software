import React, { useEffect } from 'react';
import './App.css';
import * as THREE from 'three';

const App = () => {

  useEffect(() => {
    // Fundo estrelado usando Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#three-canvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const starGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 100;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    function animateStars() {
      starField.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animateStars);
    }

    animateStars();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    camera.position.z = 5;
  }, []);

  return (
    <div className="App">
      <canvas id="three-canvas"></canvas>
    </div>
  );
};

export default App;
