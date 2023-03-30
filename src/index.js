import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App'
import img from './japanese_sun.png'
import './style.css'

const root = createRoot(document.getElementById('root'))
root.render(
    <div className="app">
        <div className="app-background" >
            <img src={img} alt="japanese sun" />
        </div>
        <Canvas shadows camera={{ position: [0, 6.5, 11.75] }} >
            <App />
        </Canvas>
    </div >
)