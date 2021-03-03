import React from "react";
function Mounting() {
  return (
    <div>
      <h2>Mounting</h2>
      <p>
        Mounting The name is self-explanatory. Mounting is the phase in which
        <br />
        our React component mounts on the DOM (i.e., is created and inserted
        <br />
        into the DOM). This phase comes onto the scene after the initialization
        <br />
        phase is completed. In this phase, our component renders the first time.
        <br />
        The methods that are available in this phase are: 1.
        <br />
        componentWillMount() This method is called just before a component
        <br />
        mounts on the DOM or the render method is called. After this method, the
        <br />
        component gets mounted. Note: You should not make API calls or any data
        <br />
        changes using this.setstate in this method because it is called before
        <br />
        the render method. So, nothing can be done with the DOM (i.e. updating
        <br />
        the data with API response) as it has not been mounted. Hence, we can’t
        <br />
        update the state with the API response. 2. componentDidMount() This
        <br />
        method is called after the component gets mounted on the DOM. Like
        <br />
        componentWillMount, it is called once in a lifecycle. Before the
        <br />
        execution of this method, the render method is called (i.e., we can
        <br />
        access the DOM). We can make API calls and update the state with the API
        <br />
        response.
      </p>
    </div>
  );
}
export default Mounting;
