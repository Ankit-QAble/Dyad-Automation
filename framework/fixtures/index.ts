import { test as base } from '@playwright/test';
import { TestDataRegistry, createApplicant, createPolicyRef, createClaimRef } from './factories';

/**
 * Extends the base Playwright test with a `testData` fixture — the single entry
 * point specs use to get isolated, unique data instead of hardcoding values. Import
 * `test`/`expect` from this module in every spec under /tests, not directly from
 * '@playwright/test'.
 */
export interface TestData {
  applicant: typeof createApplicant;
  policyRef: typeof createPolicyRef;
  claimRef: typeof createClaimRef;
}

export const test = base.extend<{ testData: TestData }>({
  // eslint-disable-next-line no-empty-pattern
  testData: async ({}, use) => {
    const registry = new TestDataRegistry();
    const testData: TestData = {
      applicant: (overrides) => registry.track('applicant', createApplicant(overrides)),
      policyRef: (product, lineOfBusiness, overrides) =>
        registry.track('policy', createPolicyRef(product, lineOfBusiness, overrides)),
      claimRef: (policyNumber, overrides) =>
        registry.track('claim', createClaimRef(policyNumber, overrides)),
    };
    await use(testData);
    await registry.releaseAll();
  },
});

export { expect } from '@playwright/test';
