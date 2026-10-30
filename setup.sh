#!/bin/bash
npx -y create-vite@latest tmp-app --template react <<EOF
schemesetu
EOF
mv tmp-app/* .
mv tmp-app/.* .
rm -rf tmp-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react recharts react-router-dom clsx tailwind-merge
