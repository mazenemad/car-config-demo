import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { Stats } from '@react-three/drei'
import { Leva } from 'leva'
import './styles.css'
import App from './App'
import Layout from './layout'
import Application from './App2'
createRoot(document.getElementById('root')).render(
  <Application/>
)
