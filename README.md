# Git, GitHub & CI/CD Tutorial

A single-page, beginner-friendly tutorial covering Git fundamentals, GitHub collaboration, GitHub Actions, and CI/CD — with **100 interactive quiz questions** and a responsive Tailwind CSS design.

## What's Inside

| File | Purpose |
|------|---------|
| `index.html` | Tutorial content, layout, and Tailwind styling |
| `script.js` | Mobile navigation, table-of-contents scroll spy, and 100 MCQs |
| `CNAME` | Custom domain configuration for GitHub Pages |
| `README.md` | This deployment guide |

## Local Preview

No build step required. Open the tutorial directly:

```bash
# Option 1: Open in your browser
open index.html

# Option 2: Serve locally (recommended — avoids some browser file:// quirks)
python3 -m http.server 8080
# Then visit http://localhost:8080
```

---

## Hosting on GitHub Pages

This guide walks you through publishing this tutorial as a live website using GitHub Pages.

### Important: Private Repository Considerations

This repository is currently **private**. GitHub Pages visibility depends on your account type and repository settings:

| Account Type | Private Repo Pages | Public Repo Pages |
|---|---|---|
| **GitHub Free** | Pages from private repos are **not available** | Free — site is public |
| **GitHub Pro** (individual) | Pages from private repos **are available** | Free — site is public |
| **GitHub Team / Enterprise** | Available per org policy | Free — site is public |

**What this means for you:**

- If you are on **GitHub Free** and want a **public tutorial site**, you must first change the repository visibility to **public** (see Step 1 below).
- If you have **GitHub Pro** (or higher) and want to keep the repo private, you can enable Pages on the private repo — but note the published site itself will still be **publicly accessible** unless you use Enterprise Cloud with access controls.
- For a beginner tutorial like this one, making the repository **public** is the simplest and most common approach.

---

### Step 1: Decide on Repository Visibility

#### Option A — Make the repository public (recommended for Free accounts)

1. Go to your repository on GitHub.
2. Click **Settings** (top navigation bar).
3. Scroll to the bottom **Danger Zone** section.
4. Click **Change repository visibility**.
5. Select **Make public**, type the repository name to confirm, and click **I understand, change repository visibility**.

> **Safety tip:** Before making a repo public, scan for secrets (API keys, tokens, `.env` files). This tutorial contains no secrets — only placeholder content.

#### Option B — Keep the repository private (requires GitHub Pro+)

1. Verify your account includes Pages for private repositories ([GitHub pricing](https://github.com/pricing)).
2. Skip visibility changes and proceed to Step 2.

---

### Step 2: Push Your Files to GitHub

If you haven't already pushed this project:

```bash
git add index.html script.js README.md CNAME
git commit -m "Add Git & CI/CD tutorial site"
git push origin main
```

Ensure `index.html` is at the **root** of the repository (or configure the Pages source accordingly).

---

### Step 3: Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings → Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` → `/ (root)` → click **Save**

GitHub will build and deploy your site. The first deployment may take 1–3 minutes.

4. Once complete, your site URL appears at the top of the Pages settings page:
   - `https://<username>.github.io/<repository-name>/`

---

### Step 4 (Optional): Use a Custom Domain

The included `CNAME` file tells GitHub Pages to serve your site at a custom domain.

1. Edit `CNAME` and replace the placeholder with your actual domain:
   ```
   www.yourcustomdomain.com
   ```
2. Commit and push the change.
3. At your domain registrar's DNS settings, add:
   - **CNAME record:** `www` → `<username>.github.io`
   - Or **A records** for apex domains pointing to GitHub Pages IP addresses (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. Back in **Settings → Pages**, enter your custom domain and enable **Enforce HTTPS** once DNS propagates.

---

### Step 5: Verify the Deployment

1. Visit your Pages URL in a browser.
2. Confirm the tutorial loads, the sidebar navigation works (desktop), and the mobile menu slides open (resize your browser or use a phone).
3. Expand a few quiz answers to verify the `<details>` accordions work.

---

## Optional: Deploy via GitHub Actions (CI/CD)

For larger projects you may prefer Actions-based deployment. For this static site, branch-based Pages (Step 3) is sufficient. If you want to practice CI/CD, add `.github/workflows/deploy-pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then in **Settings → Pages**, change the source to **GitHub Actions** instead of "Deploy from a branch."

---

## Customization

- **Content:** Edit sections in `index.html`. Add images by replacing `[[VISUAL_PLACEHOLDER: ...]]` tags with `<img>` elements.
- **Quiz questions:** Edit the `MCQS` object in `script.js`. Each section currently has 10 questions (100 total).
- **Colors:** Adjust the Tailwind config in the `<script>` block at the top of `index.html`.
- **CNAME:** Update or remove `CNAME` if you don't need a custom domain.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Site shows 404 | Confirm Pages is enabled, branch is `main`, and `/ (root)` is selected. Wait a few minutes. |
| CSS/JS not loading | Ensure file paths are relative (`script.js`, not `/script.js`) if using a project site URL with a subpath. |
| Custom domain not working | Check DNS propagation (can take up to 48 hours). Verify `CNAME` matches exactly. |
| Pages unavailable on private repo | Upgrade to GitHub Pro or make the repository public. |

---

## License

Use and adapt this tutorial freely for learning and teaching purposes.
