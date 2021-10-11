# variable-iterator #

AWS Environment Variable Generator, Store, &amp; Sanitation 

## Schema ##

**Notes**

- If any key-value assignment is found to have a `null` value, the User will be linted with the data-type and expected input via prompt.

```json
{
    "Global": {
        "Organization": null,
        ""
    },
    "Development": [
        {
            "Key": "...",
            "Value": "...",
            "Secret": null,
            "Overwrite": false
        },
        {
            "Key": "...",
            "Value": "...",
            "Secret": null,
            "Overwrite": false
        }
    ]
}
```
