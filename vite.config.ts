import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react()
    ],
    resolve:{
        alias:{
            "@utils": "/src/utils",
            "@domain": "/src/model",
        }
    },
    server:{
        proxy:{
            "/api": {
                target: "https://python-tinyapi-sagh.onrender.com",
                // target: "http://127.0.0.1:3000", // Debugging
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
