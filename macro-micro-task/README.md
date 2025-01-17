

# Trình tự thực hiện process trong nodejs:

```
Event Loop -> Micro task -> Macro task
```

# Macro Task & Micro Task:
Micro task sẽ có priority cao hơn và bao gồm các execute:
- Promise
- Mutation Observer Api
- process.nextTick
- queueMicroTask function
- await expression in async function

Macrotask:
- setTimeout và setInterval trong các callback.
- DOM manipulation and rendering.
- I/O operations (file reading/writing)
- Network requests (XML, fetch)
- Event handlers (AddEventListener)