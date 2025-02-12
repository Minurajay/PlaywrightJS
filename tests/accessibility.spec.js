import { expect , test } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

test('the page is accessible', async ({ page }, testInfo) => {
  await page.goto('https://www.ascentic.lk/en/');

  await test.step('check a11y', async () => {
    const {violations} = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    // .withRules([
    //   'accesskeys',
    //   'area-alt',
    //   'aria-allowed-role',
    //   'aria-braille-equivalent',
    //   'aria-conditional-attr',
    //   'aria-deprecated-role',
    //   'aria-dialog-name',
    //   'aria-prohibited-attr',
    //   'aria-roledescription',
    //   'aria-treeitem-name',
    //   'aria-text',
    //   'audio-caption',
    //   'blink',
    //   'duplicate-id',
    //   'empty-heading',
    //   'frame-focusable-content',
    //   'frame-title-unique',
    //   'heading-order',
    //   'html-xml-lang-mismatch',
    //   'identical-links-same-purpose',
    //   'image-redundant-alt',
    //   'input-button-name',
    //   'label-content-name-mismatch',
    //   'landmark-one-main',
    //   'link-in-text-block',
    //   'marquee',
    //   'meta-viewport',
    //   'nested-interactive',
    //   'no-autoplay-audio',
    //   'role-img-alt',
    //   'scrollable-region-focusable',
    //   'select-name',
    //   'server-side-image-map',
    //   'skip-link',
    //   'summary-name',
    //   'svg-img-alt',
    //   'tabindex',
    //   'table-duplicate-name',
    //   'table-fake-caption',
    //   'target-size',
    //   'td-has-header',
    // ])
    .analyze()
    
    await testInfo.attach('accessibility-scan-results', {
      body: JSON.stringify(violations, null, 2),
      contentType: 'application/json'
    });

    // expect(violations).toEqual([]);
    expect(violations).toHaveLength(0)
  })
  
});
//newline

