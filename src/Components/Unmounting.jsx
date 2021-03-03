import React from "react";
export default function Unmounting() {
  return (
    <div>
      <h2>Unmounting</h2>
      <p>
        A React component's lifecycle contains distinct phases for creation and
        <br />
        deletion. In coding terms, these are called mounting and unmounting. You
        <br />
        can also think of them as "setup" and "cleanup". If you were going to
        <br />
        have a picnic, just before you lay down the picnic blanket you'd make
        <br />
        sure the ground was level and clean. Also, after you're done, and before
        <br />
        you clean up your picnic blanket, you'd make sure you've taken all your
        <br />
        belongings off it and cleared up any garbage left on the grass so people
        <br />
        after you can easily use the same spot. That's very similar to what
        <br />
        happens with React components. The browser window is almost like a great
        <br />
        big field that loads the components that can be used. And when they
        <br />
        leave, it's only polite of them to clean up the space they were using —
        <br />
        so that other components can reuse the same space without any annoyances
        <br />
        due to things left behind.
      </p>
    </div>
  );
}
