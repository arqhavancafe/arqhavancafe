import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

let modelCounter = 0

function Model({ modelUrl, scale }) {
  const { scene } = useGLTF(modelUrl)

  useEffect(() => {
    modelCounter++
    document.getElementById('progress-bar').style.width = modelCounter * 20 + '%'
    if (modelCounter * 10 >= 50) {
      setTimeout(() => {
        document.getElementById('typeing').style.display = 'block'
        document.getElementById('loading').style.opacity = '0'
        setTimeout(() => {
          document.getElementById('loading').style.visibility = 'hidden'
        }, 500)
      }, 1909)
      setTimeout(() => {
        document.getElementById('loading').style.display = 'none'
      }, 2511)
    }
  }, [modelUrl])

  return <primitive object={scene} scale={scale} />
}

function AnimatedModel({
  modelUrl,
  scale,
  rotationSpeed,
  scrollRotationFactor,
  autoRotate = true,
  rotationClamp = 0.2,
  resetOnOverflow = false,
  resetLimit = Math.PI,
  scrollEffectMin = 0,
  scrollEffectMax = Infinity,
  scrollStartRotation = null
}) {
  const groupRef = useRef()
  const [direction, setDirection] = useState(1)
  const scrollOffset = useRef(0)
  const scrollInfluence = useRef(0)
  const initialRotation = useRef(new THREE.Euler())
  const hasEnteredScrollZone = useRef(false)

  useEffect(() => {
    if (groupRef.current) {
      initialRotation.current.copy(groupRef.current.rotation)

      if (scrollStartRotation !== null) {
        groupRef.current.rotation.y = scrollStartRotation
      }
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      const inRange = scrollY >= scrollEffectMin && scrollY <= scrollEffectMax

      if (inRange && !hasEnteredScrollZone.current) {
        hasEnteredScrollZone.current = true
      }

      if (!inRange && hasEnteredScrollZone.current) {
        hasEnteredScrollZone.current = false
      }

      if (inRange) {
        const delta = scrollY - scrollOffset.current
        scrollOffset.current = scrollY
        scrollInfluence.current += delta * scrollRotationFactor
        scrollInfluence.current = THREE.MathUtils.clamp(scrollInfluence.current, -0.3, 0.3)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollRotationFactor, scrollEffectMin, scrollEffectMax, scrollStartRotation])

  useFrame(() => {
    if (!groupRef.current) return

    const rotationY = groupRef.current.rotation.y
    scrollInfluence.current = THREE.MathUtils.lerp(scrollInfluence.current, 0, 0.05)
    groupRef.current.rotation.y += scrollInfluence.current

    if (autoRotate) {
      if (rotationY >= rotationClamp) setDirection(-1)
      else if (rotationY <= -rotationClamp) setDirection(1)
      groupRef.current.rotation.y += direction * rotationSpeed
    }

    if (resetOnOverflow && Math.abs(rotationY) > resetLimit) {
      groupRef.current.rotation.copy(initialRotation.current)
      setDirection(1)
    }
  })

  return (
    <group ref={groupRef}>
      <Model modelUrl={modelUrl} scale={scale} />
    </group>
  )
}

export default function ModelViewer({
  modelUrl = '/models/model.glb',
  scale = 0.75,
  wrapperClass = 'cup-model-wrapper',
  cameraPosition = [-5, 6, 5],
  fov = 62,
  rotationSpeed = 0.001,
  scrollRotationFactor = 0.00025,
  scrollDownMultiplier = 2,
  autoRotate = true,
  rotationClamp = 0.2,
  resetOnOverflow = false,
  resetLimit = Math.PI,
  scrollEffectMin = 0,
  scrollEffectMax = Infinity,
  scrollStartRotation = null,
  scrollOffsetClamp = null
}) {
  const wrapperRef = useRef()
  const baseTopRef = useRef(0)
  const baseOffsetRef = useRef(0)
  const isImage = /\.(png|jpg|jpeg|gif)$/i.test(modelUrl)

  useEffect(() => {
    if (!isImage && modelUrl) {
      useGLTF.preload(modelUrl)
    }
  }, [modelUrl, isImage])

  useEffect(() => {
    if (!wrapperRef.current) return

    const computedStyle = getComputedStyle(wrapperRef.current)
    const topFromCSS = parseFloat(computedStyle.top) || 0
    baseTopRef.current = topFromCSS

    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const pageOffset = window.scrollY + wrapperRect.top
    baseOffsetRef.current = pageOffset

    const clamp = scrollOffsetClamp || { min: 0, max: Infinity }

    const handleScroll = () => {
      if (!wrapperRef.current) return

      const scrollY = window.scrollY
      const min = clamp.min ?? 0
      const max = clamp.max ?? Infinity

      const relativeScrollY = scrollY - baseOffsetRef.current

      if (relativeScrollY < min || relativeScrollY > max) return

      if (baseTopRef.current === null) {
        const currentTop = parseFloat(getComputedStyle(wrapperRef.current).top) || 0
        baseTopRef.current = currentTop
      }

      const deltaY = relativeScrollY - min
      const newTop = baseTopRef.current + deltaY * scrollDownMultiplier
      wrapperRef.current.style.top = `${newTop}px`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDownMultiplier, scrollOffsetClamp])

  return (
    <div>
      <div ref={wrapperRef} className={wrapperClass} style={{ position: 'absolute' }}>
        {isImage ? (
          <img src={modelUrl} alt="Model" style={{ width: '100%', height: 'auto' }} />
        ) : (
          <Canvas camera={{ position: cameraPosition, fov }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[6, 7, 6]} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <directionalLight position={[0, 8, 5]} intensity={1.5} />
            <Suspense fallback={null}>
              <PresentationControls>
                <AnimatedModel
                  modelUrl={modelUrl}
                  scale={scale}
                  rotationSpeed={rotationSpeed}
                  scrollRotationFactor={scrollRotationFactor}
                  autoRotate={autoRotate}
                  rotationClamp={rotationClamp}
                  resetOnOverflow={resetOnOverflow}
                  resetLimit={resetLimit}
                  scrollEffectMin={scrollEffectMin}
                  scrollEffectMax={scrollEffectMax}
                  scrollStartRotation={scrollStartRotation}
                />
              </PresentationControls>
            </Suspense>
          </Canvas>
        )}
      </div>
    </div>
  )
}
