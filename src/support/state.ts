import { Browser, Page } from "@playwright/test";

export const state: { browser: Browser | null; page: Page | null } = {
  browser: null,
  page: null,
};
