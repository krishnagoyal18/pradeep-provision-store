PRADEEP PROVISION STORE — MULTI-LEVEL CATALOG

1. Open index.html.
2. Website flow is:
   Category -> Brand / Variety -> Products.
3. Product cards already have automatic image lookup.
4. Put a product image inside the images folder and name it using the product name (for example: dove-soap.jpg, colgate.png, surf-excel.png).
5. PNG / JPG / JPEG / WEBP are supported.
6. Existing supplied images are preserved.
7. Some images have built-in aliases (for example: soap-all-types.png can match the soap group; aapka exact product filename is preferred).
8. You do NOT need to copy a path into JavaScript for normal name-matching images.
9. For a brand/product that has no image yet, the card still shows a clean fallback icon. Add the correctly named image later and refresh the website.
10. Replace WHATSAPP_NUMBER in script.js when the shop number is ready.

IMPORTANT:
The website is a static HTML/CSS/JS site, so it cannot scan arbitrary new files in the images folder at runtime. New images are picked up automatically when their filename matches the product name or one of the aliases already included in script.js.
