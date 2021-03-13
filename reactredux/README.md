<h1>Curso de Redux da RocketSeat</h1>

<strong>createStore</strong>
<p>Essa função é a responsável por criar o estado global de nossas aplicações</p>

<strong>Dispatch</strong>
<p>Servem para disparar actions para o redux</p>

<br/><br/>
<hr/>
<h1>Actions & Reducers</h1>
An action is just a plaing Javascript object:
<code>
<pre>
{ 
  type: 'ADD_CONTACT', 
  name: 'James' 
}
</pre>
</code>

The code above defines an action with type ADD_CONTACT and a name property.
<br/>
An action clearly describes why the state change happened, and can be dispatched from anywhere in your app.
At this points we just have a store, which includes our state data and an object, that includes some data that need to be changed in the state. So, how do we actually do the change? 
To tie the store and the action together, we need to write a function, called a <strong>reducer</strong>.

It takes state and action as arguments, and returns the next state of the app.

<code>
<pre>
function contactsApp(state, action) {
  if (action.type === 'ADD_CONTACT') {
    return [ ...state,  action.name ]
  } else {
    return state
  }
}
</pre>
</code>

The code above defines a simples reducer function, that checks the action and returns the new state.
These concepts are basically the idea of Redux: you hold the global state in a <strong>store</strong>, define <strong>actions</strong> to describe what to change in the store and write <strong>reducer</strong> functions to handle those actions.
<hr/>
<h1>Actions</h1>
<strong>Action</strong> can be viewed as payloads of information that send data to the store. Actions are represented by simple Javascript object and need to have a type property.

<code>
<pre>
{
  type: 'ADD_CONTACT',
  name: 'James'
}
</pre>
</code>

In the example above, we can define an action with the type ADD_CONTACT and provide it a name property as its payload.

<strong>
Notice that for the type we're using all uppercase letters and words separated by underscores. This is also called 'snake case'. This is the generally accepted way to create an action type.
</strong>

You can use naming and structure for the other properties defining the data in the action.
You can, for instance, call it payload, and provide it an object with the data:

<code>
<pre>
{
    type: 'ADD_CONTACT',
    payload: {
        name: "Jimmy Barnes"
    }
 }
</pre>
</code>

You should pass as little data in each action as possible. That keeps the actions clean and easy to read.
<hr/>
<h1>Action Creators</h1>
In order to use the same action with differents payloads, as well as create reusable code, we can create <strong>Action creators</strong>
<strong>Action creators</strong> are simple functions that return actions.

<code>
<pre>
function addContact(person) {
  return {
    type: 'ADD_CONTACT',
    payload: person
  }
}
</pre>
</code>

The action creator function takes a person parameter and user that as the actions payload. Now, we can use the action creator to create multiple new contact by passing it the corresponding data.

Action creators are not built into the Redux library by default. It is a pattern that was implemented to create code that reflects a more DRY (Don't Repeat Yourself) approach.
<hr/>
<h1>Reducer Function</h1>
<strong>Reducers</strong> are functions that handle the actions.
The function takes the current state and the action as its parameters and returns the new state.
A reducer can handle multiple actions, so usually it includes a switch statement for each action case.


<code>
<pre>
function contactsApp(state, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [ ...state,  action.person ]
    default:
      return state
  }
}
</pre>
</code>

In the code above, our function uses a switch statement to handle the appropriate actions. As the default case, it just returns the current state.

Remember, the reducer has to be a pure function, meaning it cannot modify the current state. It has to return a new state object instead.

The <strong>default</strong> case is added for handling unknow actions.

<hr/>
<h1>Multiple Reducers</h1>
If you have more than one identity (.i.e users, products, invoices, orders, etc..), 
it's typically a good idea to break them into multiple reducer functions to separate concerns.

Redux gives us a method that we can use called combineReducers. This allows us to use more than one reducer so that when an action gets dispatched, the action would get run through all of the reducers instead of only one. It also allow us to separate the concerns of our store state.

<code>
<pre>
const contactsApp = combineReducers({
  addContacts,
  doSomething
})
</pre>
</code>

Now, our contactsApp is combining two reducers into one.

<strong>
It's a good practice to provide each reducer only the part of the state that it need to manage. This is called <strong>reducer composition</strong> and is a fundamental pattern of building Redux apps.
</strong>