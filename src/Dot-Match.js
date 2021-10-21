export const Patterns = [
    {
        File: ".env",
        Pattern: "(?<![\\w\\d]).env(?![\\w\\d])",
        Ignore: false
    },
    {
        File: ".env.development",
        Pattern: "(?<![\\w\\d]).env.development(?![\\w\\d])",
        Ignore: false
    },
    {
        File: ".env.qa",
        Pattern: "(?<![\\w\\d]).env.qa(?![\\w\\d])",
        Ignore: false
    },
    {
        File: ".env.staging",
        Pattern: "(?<![\\w\\d]).env.staging(?![\\w\\d])",
        Ignore: false
    },
    {
        File: ".env.uat",
        Pattern: "(?<![\\w\\d]).env.uat(?![\\w\\d])",
        Ignore: false
    },
    {
        File: ".env.pre-production",
        Pattern: "(?<![\\w\\d]).env.pre-production(?![\\w\\d])",
        Ignore: false
    },
    {
        File: ".env.production",
        Pattern: "(?<![\\w\\d]).env.production(?![\\w\\d])",
        Ignore: false
    },
    {
        File: ".env.local",
        Pattern: "(?<![\\w\\d]).env.local(?![\\w\\d])",
        Ignore: true
    },
    {
        File: ".env.development.local",
        Pattern: "(?<![\\w\\d]).env.development.local(?![\\w\\d])",
        Ignore: true
    },
    {
        File: ".env.qa.local",
        Pattern: "(?<![\\w\\d]).env.qa.local(?![\\w\\d])",
        Ignore: true
    },
    {
        File: ".env.staging.local",
        Pattern: "(?<![\\w\\d]).env.staging.local(?![\\w\\d])",
        Ignore: true
    },
    {
        File: ".env.uat.local",
        Pattern: "(?<![\\w\\d]).env.uat.local(?![\\w\\d])",
        Ignore: true
    },
    {
        File: ".env.pre-production.local",
        Pattern: "(?<![\\w\\d]).env.pre-production.local(?![\\w\\d])",
        Ignore: true
    },
    {
        File: ".env.production.local",
        Pattern: "(?<![\\w\\d]).env.production.local(?![\\w\\d])",
        Ignore: true
    }
];

export const Files = Patterns.map((Value) => Value.File);

export const Track = Patterns.filter(($) => $.Ignore === false);
export const Ignore = Patterns.filter(($) => $.Ignore === true);

Ignore.files = Patterns.map((Value) => Value.File);
Track.files = Patterns.map((Value) => Value.File);
