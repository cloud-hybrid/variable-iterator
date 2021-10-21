const Patterns = [
    {
        File: ".env",
        Pattern: "(?<![\\w\\d]).env(?![\\w\\d])"
    },
    {
        File: ".env.local",
        Pattern: "(?<![\\w\\d]).env.local(?![\\w\\d])"
    },
    {
        File: ".env.development",
        Pattern: "(?<![\\w\\d]).env.development(?![\\w\\d])"
    },
    {
        File: ".env.qa",
        Pattern: "(?<![\\w\\d]).env.qa(?![\\w\\d])"
    },
    {
        File: ".env.staging",
        Pattern: "(?<![\\w\\d]).env.staging(?![\\w\\d])"
    },
    {
        File: ".env.uat",
        Pattern: "(?<![\\w\\d]).env.uat(?![\\w\\d])"
    },
    {
        File: ".env.pre-production",
        Pattern: "(?<![\\w\\d]).env.pre-production(?![\\w\\d])"
    },
    {
        File: ".env.production",
        Pattern: "(?<![\\w\\d]).env.production(?![\\w\\d])"
    },
    {
        File: ".env.development.local",
        Pattern: "(?<![\\w\\d]).env.development.local(?![\\w\\d])"
    },
    {
        File: ".env.qa.local",
        Pattern: "(?<![\\w\\d]).env.qa.local(?![\\w\\d])"
    },
    {
        File: ".env.staging.local",
        Pattern: "(?<![\\w\\d]).env.staging.local(?![\\w\\d])"
    },
    {
        File: ".env.uat.local",
        Pattern: "(?<![\\w\\d]).env.uat.local(?![\\w\\d])"
    },
    {
        File: ".env.pre-production.local",
        Pattern: "(?<![\\w\\d]).env.pre-production.local(?![\\w\\d])"
    },
    {
        File: ".env.production.local",
        Pattern: "(?<![\\w\\d]).env.production.local(?![\\w\\d])"
    }
];

Patterns.forEach(
    (Target) => console.debug(Target)
);
