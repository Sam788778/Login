import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SchemaLogin } from './Schema/Schema.js'
import { SchemaRegistr } from "./Schema/Schema.js"

createRoot(document.getElementById('root')).render(
    <App SchemaLogin={SchemaLogin} SchemaRegistr={SchemaRegistr} />
)
