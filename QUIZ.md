Redux Quiz
===

Implement a simple name tag app in react/redux.

* Normal PR like a Lab
* Open Dev (Internet, your prior work, docs)
* **45 minutes**!
* You _will_ need to install additional dependencies!

## Components

Tree:
* App
    * Connect(Controls)
        * Controls
    * Connect(Display)
        * Display

Details:
* Controls has two `input`s, one for greeting
and one for name
* Display combines the greeting and name into something
like a name tag:

```
|       Hello       |  
|     stranger      |
```

Testing:

* Unit test reducers and actions!

Reducers:

* `greeting` - the greeting, defaults to "Hello"
* `name` - the name, defaults to ""

Actions:

* `GREETING_CHANGE` update greeting to `payload`
* `NAME` update name to `payload`

Action Creators:

* `changeGreeting` creates action to change greeting
* `changeName` creates action to change name
