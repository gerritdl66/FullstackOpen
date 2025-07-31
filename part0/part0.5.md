```mermaid
sequenceDiagram
participant browser
participant server

browser ->>+ server: GET request page 200
server -->>- browser: Send HTML
note right of browser: Browser start parse page
browser ->>+ server: request main.css
server -->>- browser: send main.css
browser ->>+ server: request spa.js
server -->>- browser: send spa.js
browser ->>+ server: request data.json
server -->>- browser: send data.json
note right of browser: browser parse the html
```
