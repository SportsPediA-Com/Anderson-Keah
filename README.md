# Anderson Keah, Sr. — personal website

A Jekyll site hosted free on GitHub Pages, with a posting dashboard through Pages CMS.

## 1. Put the site on GitHub (one time, about 15 minutes)

1. Sign in to github.com (your account is SportsPediA-Com).
2. Create a new **public** repository, for example `AndersonKeah.com`. (Account: SportsPediA-Com. Visitors never see the username once your domain is connected.)
   - Until the domain is connected, the site's preview address is `https://sportspedia-com.github.io/AndersonKeah.com/`. At that address the page shows without styling unless you set `baseurl: "/AndersonKeah.com"` in `_config.yml`. Once your domain works, set it back to `baseurl: ""`.
3. On the repository page, choose **Add file → Upload files**. Drag in everything from this folder, including `_posts`, `_layouts`, `_includes`, `_data` and `assets`, then click **Commit changes**.
   - **`.pages.yml` is a hidden file.** On a Mac, press Cmd+Shift+. in Finder to show hidden files before you drag. If it still doesn't upload, choose **Add file → Create new file**, name it `.pages.yml`, and paste in its contents.
4. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, then branch **main** and folder **/(root)**. Click **Save**.
5. After a minute or two, the preview is live at `https://sportspedia-com.github.io/AndersonKeah.com/` (see the baseurl note above).

## 2. Connect your own domain

1. Buy a domain from any registrar, such as Cloudflare, Namecheap or Porkbun (about $10–15 a year). For example, `andersonkeah.com`.
2. In the repository, go to **Settings → Pages → Custom domain**. Enter `www.andersonkeah.com` and click **Save**.
3. In your registrar's DNS settings, add these records:
   - `CNAME` record: host `www`, value `sportspedia-com.github.io`
   - Four `A` records, all with host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Wait for DNS to take effect (from a few minutes up to a day). Then tick **Enforce HTTPS** on the same Pages settings screen.
5. Open `_config.yml` and set `url: "https://www.andersonkeah.com"`. This helps search engines and link previews.

GitHub's own guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## 3. Post activities (any time)

1. Go to https://app.pagescms.org and sign in with GitHub. Allow it access to your site repository.
2. Open your repository. You will see two sections:
   - **Activity posts.** Click **Add an entry** and fill in the category, title, date, description and any of the optional fields: photo, PDF, link, authors and venue. Click **Save**.
   - **Photo & CV.** Upload your headshot and your CV PDF. They appear in the top section of the site, along with a Download CV button.
3. The site rebuilds by itself. Your post is live in about a minute.

How posts appear on the site:
- Every post shows in the **Activity** feed, newest first. Visitors can filter the feed by category.
- Every post gets its own shareable page at `/activity/YEAR/title/`.
- Posts with the category **Paper** or **Talk** are also listed under **Publications & presentations**, formatted as citations.
- **Date shown** replaces the displayed date. Use it for "Forthcoming", "Spring 2027" or a range like "2025 – present". The **Date** field still sets the order.

## Editing the fixed sections

The About, Research, Teaching, Program leadership and Education sections are in `index.html`. Edit that file on GitHub with the pencil icon, then commit.
