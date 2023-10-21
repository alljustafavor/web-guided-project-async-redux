## Finite State Machines

A finite state machine (FSM) takes the current state of the machine or program and performs an action that changes the state into a new state.

A good example of a finite state machine is the following program language identifier ([watch the video](https://www.youtube.com/watch?v=RjOCRYdg8BY)):

- `S` => `LT`: Start with a letter and transition to the state of the tail.
- `T` => `LT` (right recursive): For input letters, go back to the tail or transition to `E`.
- `T` = `DT`: For input digits, go back to the tail or transition to `E`.
- `T` => `E`: Perform an action and transition to `E`.
- `E` => `;`: Add an ending statement.

![Screenshot 2023-10-21 143315](https://raw.githubusercontent.com/alljustafavor/web-guided-project-async-redux/assets/63937680/c79b75e5-7028-4b4f-b1d9-b855e38ebcd9.png)

### Program Language Identifiers

- `E` = Ending statement (`;`)
- `S` = Legal sentence (Finish)
- `D` = Digit (0-9)
- `L` = Letter (a-z/A-Z)
- `T` = Tailpiece...
