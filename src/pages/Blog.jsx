import React from 'react';

const Blog = () => {
    return (
        <div className='my-container mt-16 mb-10'>
            <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='70326c9b-4a0f-429b-9c76-792941e326d5'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                    width='52'
                    height='24'
                  />
                </svg>
                <span className='relative'>Food</span>
              </span>{' '}
              blogs are where cookbooks meet lifestyle magazines.
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            You might think food blogging is an easy, free time hobby, but creating such informative, visual treats is no easy task. In fact, it is an art (most of the time, anyway), and, as with any serious art, it requires a lot of hard work and dedication.
            </p>
          </div>
        </div>
        <div className='max-w-screen-xl sm:mx-auto'>
          <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
            <div className='space-y-8'>
              <div>
                <p className='mb-4 text-xl font-medium'>
                Tell us the differences between uncontrolled and controlled components.
                </p>
                <p className='text-gray-700'>
                In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.
                  <br />
                  <br />
                  A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value. In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component. This makes it easy to track the state of the component and predict how it will behave. 
                  <br />
                  An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value. In uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly. This makes them simpler to implement, but they can be more difficult to track and manage in larger projects.
                </p>
              </div>
              <div>
                <p className='mb-4 text-xl font-medium'>
                How to validate React props using PropTypes?
                </p>
                <p className='text-gray-700'>
                Since parent components can pass down any data as props to child components, we need to validate the data type to ensure the child gets what it expects.
                  <br />
                  <br />
                  The React team has developed a package called PropTypes that allows you to add run time validation of the props that are passed to your components. This is why React supports a feature called prop-types that allows you to validate the types of props that are being passed to your components when they're rendered. To add support for that, we're going to have SayHello.PropTypes equals this object. We'll have a key for the prop that we want to validate. That's going to be a function that takes the prop name and the component name. Any time our SayHello component is rendered, we can check that the first name prop was passed properly.  If we save that, then we can see that warning shows up. Failed prop-type. Hey, the component "Say, Hello!" needs the prop first name to be a string, but you passed a boolean. We'll save that. We'll get a refresh and things are working a little differently. Before, we were getting a warning for both the first name and the last name, but now we're just getting one for the first name. The reason for that is that prop-types by default are not required. Because the last name wasn't provided, we're not getting the last name validated in this case. That works out nicely if you provide a default for the last name, like if we were to say unknown here.
                </p>
              </div>
            </div>
            <div className='space-y-8'>
              <div>
                <p className='mb-4 text-xl font-medium'>
                Tell us the difference between nodejs and express js.
                </p>
                <p className='text-gray-700'>
                It’s a common question whether to use Express JS vs Node JS when building an app. Both tools have their own set of advantages, but which one should you choose, especially as Node vs Express are very close in terms of syntax and use?
                  <br />
                  <br />
                  Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on. 
                  <br />
                  Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                  <br />
                  Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. <br />
                    Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
                </p>
              </div>
              <div>
                <p className='mb-4 text-xl font-medium'>
                What is a custom hook, and why will you create a custom hook?
                </p>
                <p className='text-gray-700'>
                Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. 
                  <br />
                  <br />
                  <strong>Reusability:</strong> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                  <br />
                  <br />
                  <strong>Readability:</strong> Instead of using High-Order Components (HOCs), one can use custom hooks to improve the readability of the code. Complex codes can become hard to read if layers of providers surround the components, consumers, HOCs, render props, and other abstractions, generally known as wrapper hell.
                  <br />
                  <br />
                  <strong>Testability:</strong> Generally, the test containers and the presentational components are tested separately in React. This is not a trouble when it comes to unit tests. But, if a container contains several HOCs, it becomes difficult as you will have to test the containers and the components together to do the integration tests.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Blog;