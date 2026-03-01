# Serve the Frontend Files

We can do it simply by using the `express.static` middleware. This middleware serves static files from a specified directory.

```JS
app.use(express.static('public'))
```