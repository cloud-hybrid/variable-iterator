# variable-iterator #

AWS Environment Variable Generator, Store, &amp; Sanitation 

## Schema ##

**`Environments.json`**

```json
{
    "Global": {
        "Organization": null
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
            "Value": "..."
        }
    ]
}
```

### Key-Value Assignment(s) ###

In order to require user-input, specify the key as an arbitrary but unique string,
followed with a null assignment.

### Optional Chaining ###

The following package makes use out of [*Optional Chaining*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

> The optional chaining operator (?.) enables [users] to read the value of a property located deep within a chain of connected objects without having to check 
> that each reference in the chain is valid.

Please note, the root object must be present; optional chaining operations
that're performed on an `undefined` or `null` root will result in
runtime exceptions.