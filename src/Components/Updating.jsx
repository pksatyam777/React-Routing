import React from "react";
export default function Updating() {
  return (
    <div>
      <h2>Updating</h2>
      <p>
        1 componentDidUpdate is invoked when the render function within a<br />
        component is called. This can happen when state or props changes. It can
        <br />
        also happen when forceUpdate is called. Sometimes, a component update
        <br />
        may not trigger a DOM update. This is because React creates a virtual
        <br />
        DOM after the update and checks with the virtual DOM before update. And
        <br />
        only if there is a difference, the DOM is updated. In your case,
        <br />
        probably, though the render function was triggered, there was no change
        <br />
        in the virtual DOM and hence there was no DOM update.
        <br />
      </p>
    </div>
  );
}
