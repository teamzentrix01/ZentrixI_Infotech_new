const sharp = require('sharp');

async function fixFooter() {
  const origMeta = await sharp('public/images/projects/balprada-ashram-scroll.webp').metadata();
  console.log('Original dimensions:', origMeta.width, 'x', origMeta.height);

  // Resize the viewport_footer.png (which contains footer & branches perfectly without the sticky header)
  // viewport_footer.png is 1440 x 900.
  // The footer card in viewport_footer is in the bottom area: from y = 440 to y = 900.
  // Let's crop only the footer card from viewport_footer.png
  const footerCard = await sharp('public/images/projects/viewport_footer.png')
    .extract({ left: 0, top: 440, width: 1440, height: 460 })
    .resize({ width: 720 })
    .toBuffer();

  const footerCardMeta = await sharp(footerCard).metadata();
  console.log('Resized footer card:', footerCardMeta.width, 'x', footerCardMeta.height);

  // In the original balprada-ashram-scroll.webp (height 4655):
  // Let's crop everything above the blank area (height 4260)
  const topPart = await sharp('public/images/projects/balprada-ashram-scroll.webp')
    .extract({ left: 0, top: 0, width: 720, height: 4260 })
    .toBuffer();

  // Now combine topPart + footerCard
  const combinedHeight = 4260 + footerCardMeta.height;
  console.log('New total height:', combinedHeight);

  await sharp({
    create: {
      width: 720,
      height: combinedHeight,
      channels: 4,
      background: { r: 247, g: 243, b: 235, alpha: 1 }
    }
  })
  .composite([
    { input: topPart, top: 0, left: 0 },
    { input: footerCard, top: 4260, left: 0 }
  ])
  .webp({ quality: 85 })
  .toFile('public/images/projects/balprada-ashram-scroll.webp');

  console.log('balprada-ashram-scroll.webp successfully updated with real footer card!');
}

fixFooter().catch(console.error);

