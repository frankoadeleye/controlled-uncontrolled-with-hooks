# Solving The Controlled Input Problem Using UseRef Hook

(Kindly first checkout the problem
[here](https://github.com/frankoadeleye/controlled-uncontrolled-with-hooks/tree/problem-controlled-input)
before continuing)

To solve this, the `useRef()` hook is introduced, which points to the DOM HTML
element, where the change happens; but since we don't have any `onChange`
handlers, we have completely eliminated unnecessary re-renders whenever we
update the value in the input field. All the `handleSubmit` does is print the
current value in the DOM element value only when the button is clicked.

Thanks for checking this out.

(Kindly leave a star if you find this helpful in your React journey)
