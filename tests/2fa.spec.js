const { test, expect } = require("@playwright/test");
const OTPAuth = require("otpauth");

test("Login with 2FA enabled", async ({ page }) => {
  // Credentials
  const username = "customer2@practicesoftwaretesting.com";
  const password = "welcome01";
  const otpKey = "EXNPJPDUQ5BUH5RY"; // Secret key for TOTP

  // Function to generate OTP dynamically
  function generateOTP(secret) {
    const totp = new OTPAuth.TOTP({
      secret: secret,
      digits: 6,
      algorithm: "sha1",
      period: 30,
    });
    return totp.generate();
  }

  // Navigate to the login page
  await page.goto("https://practicesoftwaretesting.com/auth/login");

  // Fill in email and password
  await page.locator('[data-test="email"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-submit"]').click();

  // Wait for OTP field to appear
  await page.waitForSelector('[data-test="totp-code"]');

  // Generate OTP dynamically
  const otpCode = generateOTP(otpKey);

  // Fill in OTP and submit
  await page.locator('[data-test="totp-code"]').fill(otpCode);
  await page.locator('[data-test="verify-totp"]').click();

  // Verify successful login
  await page.waitForSelector('[data-test="nav-menu"]', { state: "visible" });
  await expect(page.locator('[data-test="nav-menu"]')).toHaveText(/Jack Howe/i);
  });
