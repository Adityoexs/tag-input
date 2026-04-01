# Assumptions

- **Duplicate check is case-sensitive**: "React" and "react" are treated as different tags.
- **Whitespace trimming**: Tags are trimmed before validation and storage (e.g., "  hello  " becomes "hello").
- **Enter key only**: Tags are only added on `Enter` key press, not on blur or comma.
- **No maximum tag limit**: There is no enforced upper bound on the number of tags.
- **No external state management**: All state is local to `TagInputContainer` via `useState`.
- **No external UI libraries**: Styling is pure CSS with no dependencies like Tailwind or MUI.
