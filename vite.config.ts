import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react()
    ],
    resolve:{
        alias:{
        "@utils": "/src/utils"
        }
    },
    server:{
        proxy:{
            "/api": {
                target: "https://python-tinyapi-sagh.onrender.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
