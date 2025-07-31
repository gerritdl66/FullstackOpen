```mermaid
sequenceDiagram
    participant browser
    participant server

    loop rerenders page
        browser->>browser: creates new note and add to note list

    end
   browser -->> server:POST send note to server
```
