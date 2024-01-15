'use client'

import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import cn from 'classnames'
import { Dispatch, SetStateAction, Suspense, useState } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import * as THREE from 'three'

import { Container } from '@/components/common'

import reset from '@/styles/reset.module.scss'

import s from './showcase.module.scss'

type Colors = '#FFFFFF' | '#52a666' | '#6495ED' | '#000' | '#A020F0' | '#FFFF00'

const colorButtons: { color: Colors; label: string }[] = [
  {
    color: '#FFFFFF',
    label: 'White'
  },
  {
    color: '#52a666',
    label: 'Green'
  },
  {
    color: '#6495ED',
    label: 'Blue'
  },
  {
    color: '#000',
    label: 'Black'
  },
  {
    color: '#A020F0',
    label: 'Purple'
  },
  {
    color: '#FFFF00',
    label: 'Yellow'
  }
]

export default function Showcase() {
  const [machineColor, setMachineColor] = useState<Colors>('#FFFFFF')

  return (
    <Container className={s.root} borderBottom>
      <div className={s.canvasContainer}>
        <Suspense fallback={<Loader />}>
          <Canvas shadows>
            <Environment preset='studio' />
            <Model color={machineColor} />
            <OrbitControls enableZoom={false} makeDefault />
          </Canvas>
        </Suspense>
      </div>
      <div className={s.radio} role='radiogroup'>
        {colorButtons.map(button => (
          <RadioButton
            key={button.label}
            selectedColor={machineColor}
            setColor={setMachineColor}
            label={button.label}
            color={button.color}
          />
        ))}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Radio
 * -----------------------------------------------------------------------------------------------*/

interface RadioButtonProps {
  selectedColor: Colors
  setColor: Dispatch<SetStateAction<Colors>>
  label: string
  color: Colors
}

function RadioButton(props: RadioButtonProps) {
  const { color, selectedColor, setColor, label } = props

  return (
    <button
      type='button'
      className={cn(reset.root, s.colorButton)}
      role='radio'
      aria-checked={color === selectedColor}
      aria-label={`Change color to ${label}`}
      style={{ ['--color' as string]: color }}
      onClick={() => setColor(color)}
    >
      <div aria-hidden />
    </button>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Model
 * -----------------------------------------------------------------------------------------------*/

function Model(props: any) {
  const { nodes, materials } = useGLTF('/models/machine-coffee.glb')
  const [color] = useState(() => new THREE.Color())

  useFrame(() => {
    ;(materials.material as THREE.MeshStandardMaterial).color.lerp(color.set(props.color), 0.1)
  })

  return (
    <group scale={0.03} position={[0, -1.2, 0]} dispose={null} {...props}>
      <group position={[0.85, 60.163, 15.391]} scale={67.229}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_6 as unknown as THREE.Mesh).geometry}
          material={materials.touming}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_9 as unknown as THREE.Mesh).geometry}
          material={materials.material}
        />
      </group>
    </group>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Loader
 * -----------------------------------------------------------------------------------------------*/

function Loader() {
  return (
    <div className={s.loader}>
      <ImSpinner8 size={20} />
    </div>
  )
}
