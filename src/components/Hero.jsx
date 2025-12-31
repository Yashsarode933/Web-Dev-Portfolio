import { useMemo, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { ArrowRight, Download } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { generateParticles, heroGradientOverlay } from '../utils/particles'

const stats = [
  { label: 'Web Dev', value: 'Full-Stack' },
  { label: 'Projects', value: '3+' },
  { label: 'CGPA', value: '8.2' },
  { label: 'Location', value: 'Pune' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function EarthGlobe() {
  const earthRef = useRef()
  const cloudsRef = useRef()
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={groupRef}>
      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhongMaterial
          map={new THREE.TextureLoader().load('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')}
          bumpMap={new THREE.TextureLoader().load('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')}
          bumpScale={0.05}
          specularMap={new THREE.TextureLoader().load('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-water.png')}
          specular={new THREE.Color('grey')}
          emissive={new THREE.Color(0x112244)}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Clouds */}
      <mesh ref={cloudsRef} scale={1.01}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhongMaterial
          color={new THREE.Color(0xffffff)}
          transparent={true}
          opacity={0.12}
          depthWrite={false}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshBasicMaterial
          color={new THREE.Color(0x93c5fd)}
          transparent={true}
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

export default function Hero() {
  const particles = useMemo(() => generateParticles(30), [])
  const { ref, controls, variants } = useScrollAnimation({ margin: '-20% 0px' })

  return (
    <section id="hero" className="relative isolate min-h-[90vh] overflow-hidden md:mt-2">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: heroGradientOverlay,
        }}
      />
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/25 blur-2xl"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
            }}
            animate={{
              y: ['0%', '-10%', '0%'],
              x: ['0%', '4%', '-2%', '0%'],
            }}
            transition={{ duration: 8 + p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-6 md:px-4 lg:px-4 lg:pt-8">
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 shadow-inner shadow-white/10 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available · Pune, IN
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-card backdrop-blur">
            <p className="font-mono text-xs text-emerald-300">yash.sarode@portfolio: ~</p>
            <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[42px]">
              Hi, I&apos;m <span className="text-primary">Yash Sarode</span>, Computer
              Engineering student blending data engineering, full-stack, and game development.
            </h1>
            <p className="mt-4 text-sm text-slate-300 md:text-base">
              <ReactTyped
                strings={[
                  'Modernizing outdated websites into responsive, seamless platforms.',
                  'Building secure real-time apps for live coding collaboration.',
                  'Creating immersive Unreal Engine experiences with C++ and Blueprints.',
                ]}
                typeSpeed={36}
                backSpeed={18}
                loop
              />
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02]"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="https://resume-yash-sarode.tiiny.site"
              className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-slate-100 transition hover:border-white/35 hover:bg-white/5"
            >
              Download Resume <Download className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">{stat.value}</span>
                <span className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative h-full"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative flex flex-col items-center gap-6">
              <div className="glow-card float-soft relative h-48 w-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-card">
                <img
                  src="./src/assets/Yash_Profile_Casual.jpg"
                  alt="Portrait"
                  className="h-full w-full object-cover mix-blend-lighten"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-transparent to-secondary/35 mix-blend-screen" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                <div className="rounded-2xl bg-white/5 p-3 backdrop-blur">
                  <p className="text-xs text-slate-400">Specialty</p>
                  <p className="font-semibold text-white">Data & Web Platforms</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-3 backdrop-blur">
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="font-semibold text-white">Pune, IN</p>
                </div>
              </div>
              <div
                className="glass glow-border relative h-56 w-full overflow-hidden rounded-3xl hidden md:block"
              >
                <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[5, 3, 5]} intensity={1.5} />
                  <pointLight position={[-5, -3, -5]} intensity={0.8} />
                  <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                  />
                  <EarthGlobe />
                </Canvas>
                <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200/80">
                  Move cursor · Global Web Presence
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

