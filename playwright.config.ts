import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    reporter: [
        [ '@serenity-js/playwright-test', {
            crew: [
                '@serenity-js/console-reporter',
                '@serenity-js/serenity-bdd',
                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],
            ]
        }],

        // other native Playwright Test reporters
        [ 'html', { open: 'never' } ],          // built-in Playwright HTML reporter
    ],

    // Other configuration omitted for brevity
    // For details, see https://playwright.dev/docs/test-configuration
}

export default config