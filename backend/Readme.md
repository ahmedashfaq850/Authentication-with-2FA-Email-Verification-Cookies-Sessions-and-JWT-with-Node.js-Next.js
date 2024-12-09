Commands
- npm init -y
- npm install typescript and tsc

Packages
npm install bcrypt@^5.1.1 \
cookie-parser@^1.4.7 \
cors@^2.8.5 \
date-fns-tz@^3.2.0 \
dotenv@^16.4.5 \
express@^4.21.1 \
jsonwebtoken@^9.0.2 \
mongoose@^8.8.0 \
passport@^0.7.0 \
passport-jwt@^4.0.1 \
qrcode@^1.5.4 \
resend@^4.0.1-alpha.0 \
speakeasy@^2.0.0 \
zod@^3.23.8

Command
- npx tsc --init
  -- update these values in tsconfig.json
     1. "target": "ES2021", 
     2. "rootDir": "./src", 
     3. "outDir": "./dist",  
     4. "include": ["src/**/*.ts, @types"],
     5. "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]

update package.json
- "dev": "ts-node-dev --files src/index.ts",
- "build": "tsc && cp ./package.json ./dist",
- "start": "node dist/index.js"