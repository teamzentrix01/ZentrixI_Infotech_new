INSERT INTO projects (slug,title,category,summary,body,live_url,featured) VALUES
('fresh-basket','Fresh Basket','Grocery & Retail','Online grocery store with catalogue, cart and delivery slots.','Replace this with the full case study: the problem, what we built, and the result.','https://example.com',true),
('northline-metals','Northline Metals','Manufacturing','Product catalogue site for an export manufacturer.','Replace this with the full case study.','https://example.com',true),
('oak-and-co','Oak & Co','E-commerce','Furniture store with collections and enquiries.','Replace this with the full case study.','https://example.com',true)
ON CONFLICT (slug) DO NOTHING;
INSERT INTO posts (slug,title,excerpt,body) VALUES
('how-we-price-projects','How we price web projects','A plain look at fixed-price quotes and what changes them.','Write your article here. Paragraphs are separated by blank lines.

Second paragraph.'),
('landing-page-checklist','A launch checklist for landing pages','Seven things to check before you go live.','Write your article here.')
ON CONFLICT (slug) DO NOTHING;
INSERT INTO testimonials (quote,author,role)
SELECT * FROM (VALUES
('They rebuilt our app from the ground up and delivered on time.','Client Name','Founder, Company A'),
('Clean design, fast site, clear communication throughout.','Client Name','Director, Company B'),
('The dashboard is quick and easy for our team to use.','Client Name','Managing Director, Company C')
) AS t(quote,author,role) WHERE NOT EXISTS (SELECT 1 FROM testimonials);
