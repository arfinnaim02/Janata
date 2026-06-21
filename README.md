# Janata Electric & Engineering Workshop Website

Production-oriented Next.js 15 + TypeScript + Tailwind CSS website.

## Windows local setup

1. Install Node.js 20 LTS or newer.
2. Open Command Prompt inside this folder.
3. Verify:

```cmd
node -v
npm -v
```

4. This ZIP intentionally does not include `package-lock.json`. Generate a clean public-registry lock file on your own computer:

```cmd
npm install --no-audit --no-fund
```

5. Create the environment file:

```cmd
copy .env.example .env.local
```

6. Start locally:

```cmd
npm run dev
```

Open http://localhost:3000

## Production test

```cmd
npm run build
npm run start
```

## Resend email

Edit `.env.local`:

```env
RESEND_API_KEY=your_key
RESEND_FROM=Janata Website <website@your-verified-domain.com>
RESEND_TO=janata.electric.engineering1990@gmail.com
```

Without these values, the website pages still run, but email form delivery is unavailable.
