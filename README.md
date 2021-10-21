# Environment Variables #

## Configuration ##

The `variables` key can be of three different types:

- `String`: *Path to Configuration File*
- `Array<String>`: *Variable(s) that will Prompt for User Input during Configuration*
- `Array<Object>`: *Default Key-Value Environment Variables*

Where the latter two options can be mixed and matched arbitrarily.

### Examples ###

**User-Prompt Variables**:

```json
{
    "type": "module",
    "variables": [
        "PRIVATE_TOKEN"
    ]
}
```

**All CRA Advanced Configuration Options w/Defaults**:

```json
{
    "...": "...",
    "variables": [
        {
            "PORT": "8443"
        },
        {
            "HTTPS": "true"
        },
        {
            "HOST": "localhost"
        },
        {
            "FAST_REFRESH": "true"
        },
        {
            "NODE_ENV": "development"
        },
        {
            "SCROLL_TRACKING": "true"
        },
        {
            "GENERATE_SOURCEMAP": "false"
        },
        {
            "INLINE_RUNTIME_CHUNK": "true"
        },
        {
            "ESLINT_NO_DEV_ERRORS": "false"
        },
        {
            "DISABLE_ESLINT_PLUGIN": "true"
        },
        {
            "DISABLE_NEW_JSX_TRANSFORM": "false"
        },
        {
            "REACT_EDITOR": "/Applications/WebStorm.app"
        },
        {
            "CHOKIDAR_USEPOLLING": "false"
        },
        {
            "BROWSER": "google chrome"
        }
    ]
}

```