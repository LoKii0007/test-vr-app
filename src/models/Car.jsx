import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CarModel(props) {
  const { nodes, materials } = useGLTF('/car-transformed.glb')
  return (
    <group {...props} dispose={null} scale={0.1} >
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.BASE} />
    </group>
  )
}

useGLTF.preload('/car-transformed.glb')
