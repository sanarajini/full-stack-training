```javascript
function sendMessage(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
}
```
