# Deploying to Xneelo (Multiple Domain)

**Target Domain:** `steigeronline.co.za`

Since this is a React Single Page Application (SPA) using Vite, we need to ensure that:
1.  The project is built correctly.
2.  The server (Apache) redirects all requests to `index.html` so React Router can handle them.

## Prerequisites

-   **Xneelo KonsoleH Account**.
-   **FTP Client** (like FileZilla) or use the Xneelo File Manager.
-   **Node.js** installed locally.

## Step 1: Prepare the Build

1.  We have added a `public/.htaccess` file to your project. This file is critical. It tells the server: "If a user goes to `/contact`, don't look for a folder named contact, just give them `index.html` and let the app handle it."
2.  Open your terminal in VS Code.
3.  Run the build command:
    ```bash
    npm run build
    ```
4.  This will create a `dist` folder in your project directory.
    -   This `dist` folder contains everything you need to upload.
    -   It should contain `index.html`, `assets/`, and the `.htaccess` file (Vite automatically copies files from `public/` to `dist/`).

## Step 2: Configure Xneelo (Multiple Domain)

If you haven't already added the domain in KonsoleH:

1.  Log in to **KonsoleH**.
2.  Select your main hosting account/domain.
3.  On the left menu, click **Manage Services** > **Multiple Domains** > **Add**.
4.  Enter `steigeronline.co.za`.
5.  **Directory:** It will usually default to `public_html/steigeronline.co.za`. Keep note of this folder path.
6.  Complete the setup.

## Step 3: Upload Files

1.  Open **FileZilla** (or your preferred FTP tool) and connect to your main Xneelo account.
2.  Navigate to the folder created for your new domain.
    -   Usually: `/public_html/steigeronline.co.za/`
3.  **Delete** any default files (like `index.php` or `default.html`) that Xneelo might have put there.
4.  Open your local `dist` folder on your computer.
5.  **Select ALL files** inside `dist` (including `.htaccess`) and drag them into the `/public_html/steigeronline.co.za/` folder on the server.

## Troubleshooting

-   **White Screen / 404 on Refresh:**
    -   Verify that `.htaccess` was uploaded. It is a hidden file, so make sure your FTP client is set to "Force showing hidden files".
-   **Images Broken:**
    -   Ensure your `vite.config.ts` has `base: './'` (Reviewing your file, this is already set correctly!).
