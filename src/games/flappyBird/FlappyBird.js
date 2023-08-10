import { Canvas } from "@react-three/fiber";
import { FlappyBirdModel } from "./FlappyBirdModel";
import {OrbitControls} from "@react-three/drei";

const FlappyBird = () => {
  return (
    <div
      className='h-screen w-screen bg-fixed bg-repeat-x bg-contain bg-bottom bg-[#0099cc]'
      style={{ backgroundImage: `url('${window.location.origin}/assets/images/flappy-bird-background.png')` }}
    >
      <Canvas camera={{ fov: 75, position: [0, 70, 0] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <FlappyBirdModel position={[0, 0, 0]} />
        <OrbitControls/>
      </Canvas>
    </div>
  )
}

export default FlappyBird