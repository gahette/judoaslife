import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Pages(),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                // eslint-disable-next-line no-undef
                replacement: path.resolve(__dirname, 'src')
            },
            {
                find: '@layout',
                // eslint-disable-next-line no-undef
                replacement: path.resolve(__dirname, 'src/components/layout')
            }
        ]
    }
})
