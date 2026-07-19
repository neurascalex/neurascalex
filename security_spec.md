# Security Specification: NeuraScaleX Firestore

## Data Invariants
1. **AffiliateApplication**: Must have a valid name, email, profession, and source. Status must be 'pending' on creation.
2. **Lead**: Must have a valid type (DEMO, FREE_TRIAL, CONTACT), name, and email. CreatedAt must be server-time.

## The "Dirty Dozen" Payloads (Denial Tests)
1. **AffiliateApplication - ID Poisoning**: Attempt to use a 2MB string as `applicationId`.
2. **AffiliateApplication - State Spoofing**: Attempt to create an application with `status: 'approved'`.
3. **AffiliateApplication - Unverified Identity**: Attempt to read all applications as an unverified user.
4. **Lead - Field Injection**: Attempt to create a lead with a hidden `isAdmin: true` field.
5. **Lead - Timestamp Fraud**: Attempt to set a custom `createdAt` date in the past.
6. **Lead - PII Leak**: Attempt to `get` a specific lead document by ID without being an admin.
7. **Lead - Bulk Scraping**: Attempt to `list` all leads without a filter.
8. **AffiliateApplication - Type Mismatch**: Send an integer for the `email` field.
9. **AffiliateApplication - Size Attack**: Send a 1MB string for the `name` field.
10. **Lead - Invalid Type**: Send a lead with `type: 'HACK'`.
11. **Lead - Orphaned Lead**: (N/A for root collections, but testing path boundaries).
12. **System - Global Bypass**: Attempt to read `/_connection_test_/init`.

## Test Runner Logic
The following rules will be tested against these payloads using the `firestore.rules.test.ts` pattern.
