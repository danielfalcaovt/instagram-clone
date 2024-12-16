import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './config/app'
import '@/view/styles/global-styles.scss'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)
