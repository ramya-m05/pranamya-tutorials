# Pranamya Tutorials — Website

A Next.js (App Router + TypeScript + Tailwind CSS v4) website for Pranamya Tutorials,
Rajajinagar, Bengaluru.

## Pages

- `/` — Home (hero, classes overview, why us, admission CTA)
- `/about` — About & teaching philosophy
- `/classes` — Full detail on 8th, 9th, 10th Standard and 1st & 2nd PUC batches
- `/contact` — Contact form, phone/address, embedded map

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: this project uses `next/font/google` to load Fraunces, Work Sans and IBM Plex
> Mono at build time, so an internet connection is required the first time you run
> `npm run dev` or `npm run build`.

## Setting up the contact form

The enquiry form on `/contact` submits straight into a Google Form, so every
enquiry shows up as a row in that Form's linked Google Sheet — no inbox needed,
and you (and anyone you share the Sheet with) can see submissions any time.

### 1. Create the Google Form

Go to [forms.google.com](https://forms.google.com) and create a new form with
these questions, in this order (the type matters less than having one question
per field):

1. **Student's name** — Short answer
2. **Phone number** — Short answer
3. **Class interested in** — Short answer *(recommended — see note below)*
4. **Message** — Paragraph

> Note on Q3: the website sends values like `10th CBSE` or `1st PUC`. If you'd
> rather use a Dropdown/Multiple choice question instead of Short answer, make sure
> its options match those exactly (`8th State`, `8th CBSE`, `8th ICSE`, `9th State`,
> `9th CBSE`, `9th ICSE`, `10th State`, `10th CBSE`, `10th ICSE`, `1st PUC`,
> `2nd PUC`, `Not sure yet`), or Google Forms may reject the submission.

Click **Responses** → the green Sheets icon → **Create a new spreadsheet**. This
is where every enquiry will land.

### 2. Get the entry IDs

1. On the form's edit screen, click the **⋮** (more) menu → **Get pre-filled link**.
2. Fill in a dummy answer for every question, then click **Get link** → **Copy link**.
3. Paste the copied link somewhere you can read it. It'll look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?usp=pp_url&entry.111111111=Test+Name&entry.222222222=999...&entry.333333333=10th+Standard&entry.444444444=hello
   ```
4. From that link:
   - The part after `/forms/d/e/` and before `/viewform` is your **`GOOGLE_FORM_ID`**.
   - Each `entry.XXXXXXXXX=` right before your dummy answer tells you which entry
     ID belongs to which question (match them up by the dummy value you typed).

### 3. Fill in your `.env.local`

```bash
cp .env.example .env.local
```

Then fill in the five values you just found:

```
GOOGLE_FORM_ID=1FAIpQLSc...
GOOGLE_FORM_ENTRY_NAME=entry.111111111
GOOGLE_FORM_ENTRY_PHONE=entry.222222222
GOOGLE_FORM_ENTRY_CLASS=entry.333333333
GOOGLE_FORM_ENTRY_MESSAGE=entry.444444444
```

Until these are set, the form will show a friendly error asking the visitor to
call directly instead — it won't crash the site. Remember to also add these as
environment variables on whichever platform you deploy to (e.g. Vercel).

## Editing content

Almost all editable text — class details, phone numbers, address, "why choose us"
points, and the contact form's "Class interested in" dropdown options — lives in
one place: **`src/lib/data.ts`**. Update it there and it flows through every page
automatically.

The logo lives at `public/logo.webp`. Replace it with a higher-resolution version
any time you have one.

## Deploying

This is a standard Next.js app — it deploys as-is to [Vercel](https://vercel.com)
(recommended, and where `next/font` and the API route work out of the box) or any
Node.js host that supports Next.js. Remember to set `GOOGLE_FORM_ID` and the four
`GOOGLE_FORM_ENTRY_*` variables as environment variables on whichever platform you
deploy to — the contact form won't work without them there either.
