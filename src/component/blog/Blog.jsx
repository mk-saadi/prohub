import React from "react";

const Blog = () => {
	return (
		<div>
			<div className="bg-dark text-white p-3 rounded shadow">
				<div className="bg-secondary rounded shadow my-4 py-2 px-3">
					<h5 className="fs-2">
						Difference between{" "}
						<span className="text-danger fw-bold">props</span> and{" "}
						<span className="text-danger fw-bold">state</span>?
					</h5>
					<hr />
					<h5 className="ms-5">
						In React, props and state are both used to manage data
						in a component, but they serve different purposes. Props
						are used to pass data from a parent component to a child
						component. They are read-only and cannot be modified by
						the component itself. In contrast, state is used to
						manage the internal state of a component. It is owned
						and controlled by the component and can be modified
						using a state updater function. State is typically used
						to keep track of information that changes over time,
						such as user input or the results of an API call.
					</h5>
				</div>
				<div className="bg-secondary rounded shadow my-4 py-2 px-3">
					<h5 className="fs-2">
						How does{" "}
						<span className="text-danger fw-bold">useState</span>{" "}
						work?
					</h5>{" "}
					<hr />
					<h5 className="ms-5">
						useState is a React hook that allows functional
						components to manage their own state. It takes an
						initial state value as input and returns an array
						containing the current state value and a function to
						update the state. When the state is updated using the
						update function, React triggers a re-render of the
						component, passing in the new state value. This allows
						components to be more self-contained and easier to
						reason about, as they do not need to rely on a parent
						component to pass down data as props.
					</h5>
				</div>
				<div className="bg-secondary rounded shadow my-4 py-2 px-3">
					<h5 className="fs-2">
						What can{" "}
						<span className="text-danger fw-bold">useState</span> do
						apart from loading data?
					</h5>{" "}
					<hr />
					<h5 className="ms-5">
						useEffect is a React hook that allows functional
						components to perform side effects. It is often used to
						fetch data from APIs and update the component state, but
						it can also be used for other tasks, such as updating
						the document title, registering and unregistering event
						listeners, and managing animations. The hook is called
						after the component is mounted, and again after any
						updates. By using useEffect, developers can ensure that
						these side effects are performed at the appropriate
						times during the component lifecycle, without needing to
						write complex class-based component methods.
					</h5>
				</div>
				<div className="bg-secondary rounded shadow my-4 py-2 px-3">
					<h5 className="fs-2">
						How does{" "}
						<span className="text-danger fw-bold">REACT.JS</span>{" "}
						work?
					</h5>{" "}
					<hr />
					<h5 className="ms-5">
						React is a JavaScript library for building user
						interfaces. It works by creating a virtual
						representation of the UI, which is then rendered to the
						DOM. When the state of a component changes, React uses a
						process called reconciliation to calculate the
						differences between the previous and current virtual
						representations, and updates the DOM only where
						necessary. This approach allows for efficient updates
						and minimal re-renders, resulting in fast and responsive
						user interfaces. React also supports declarative
						programming, which makes it easy to reason about the
						state and behavior of a component, and encourages the
						use of reusable, composable components.
					</h5>
				</div>
			</div>
		</div>
	);
};

export default Blog;
