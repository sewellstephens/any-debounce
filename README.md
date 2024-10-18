## Any Debounce

A simple debounce package made for any javascript project.

No dependencies.

### Installation

```bash
npm i any-debounce
```

### Usage

You can use the `debouncer` function to debounce a function and the `useDebounce` function to debounce a value.

**Debouncing a value**

Great for input fields using react and useState.

```javascript
import { useDebounce } from "any-debounce";
import { useState } from "react";

const [value, setValue] = useState("");
const debouncedValue = useDebounce(value, 1000);

```

**Debouncing a function**

Great for when you don't want to use useState.

```javascript
import { debouncer } from "any-debounce";

const handleOnChange = debouncer((value) => {
    console.log(value);
    //do something with the value
}, 1000);
```

used any-debounce 0.0.2? see breaking changes below.

### Breaking Changes

- `useDebounce` is now `debounceValue` for debouncing a value
- `debouncer` is the new `debounce` for debouncing a function