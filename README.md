# Understanding Controlled Input

First let us clone and run this project:

Open your command prompt or bash and enter:

`git clone https://github.com/frankoadeleye/controlled-uncontrolled-with-hooks.git`

Enter the folder with:

`cd controlled-uncontrolled-with-hooks`

Install dependencies with:

`yarn`

Run your project with:

`yarn start`

## The problem:

Check your browser for result and enter your 'first name' and 'last name'
respectively. Then click 'create card'.

Now return to the input fields and try to change the values of the fields. You'd
notice that the result in the card is also updated in real-time. This is because
we have an unchange handler that actives updates the state and prints the result
simultaneously. This is the default state of React and how it is created to
work. Such inputs are called `controlled inputs`.

Now, say we don't the update in the browser to be instant but we only want the
update in the card to be after we click the button. How do we go about this?

We can solve this two ways:

[The first way: using a second state ](https://github.com/frankoadeleye/controlled-uncontrolled-with-hooks/solved-controlled-inputs).

[The second (better) way: useRef](https://github.com/frankoadeleye/controlled-uncontrolled-with-hooks).
