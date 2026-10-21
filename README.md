# Aveniq Angular source

Angular 22.2.2, Node.js 24.19.0.

Run `npm ci`, install the PHP dependency with Composer, then run `npm run build`. Deploy the contents of `dist/aveniq`.

AVENIQ ANGULAR WEBSITE — READY FOR HOSTINGER

1. Run `composer install --no-dev --classmap-authoritative` from this project folder. This installs the server-side mailer into `public/api/vendor`, which the Angular build copies into the output.
2. Run `npm ci` and `npm run build`.
3. Open Hostinger hPanel > Websites > Manage > File Manager and open the domain's `public_html` folder.
4. Upload the contents of `dist/aveniq` directly into `public_html`.
5. Confirm `index.html` is directly inside `public_html` (not inside another folder).
6. Configure the PHP environment variables `SMTP_USERNAME` and `SMTP_PASSWORD` privately in the hosting account for the Sales mailbox. Do not put the SMTP password in Angular code or commit it to source control.
7. Open your domain. The enquiry endpoint sends through `smtp.hostinger.com` using SSL on port 465 to `sales@aveniqsolution.com`.

Navigation uses #/ routes to support standard static hosting and page refreshes without server rewrite configuration.

Preserved: 53 pages, service/product menus, industry pages, consistent transparent main logo, automated website guide, project enquiry review and download.
The contact form sends enquiries directly to Sales through the Hostinger SMTP endpoint, then opens the review page with the same download option. SMTP credentials must be configured privately on the host.
Verification: production Angular build. The PHP endpoint and live SMTP delivery require PHP, Composer dependencies, and privately configured Hostinger credentials; the live account has not been tested.
