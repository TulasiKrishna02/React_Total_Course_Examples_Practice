import React from 'react';

const usercontext = React.createContext();

const Provider = usercontext.Provider;
const Consumer = usercontext.Consumer;

export {Provider,Consumer};

/*Notes
========
what is createContext,Provider and Consumer?
=============================================
"createContext()" is a pre-defined method in reactjs.It is used to transfer data from Parent Component to any child Component/s.

In "createContext()" method there are two pre-defined properties called "provider" and "consumer".

In "Provider" we need to specify the data which has to send from parent component to child component.

We need to Use "Provider" as a tag.We need to specify parent component related data at the "value" prop in "Provider" tag.In Provider we need to send the data which has to send from parent component to child component like props.

By Using "Consumer" we will get the data in any child component which is coming from the parent component.

We need to use "Consumer" as a tag in child Component.It will expect a function to get data.In that we need to specify a param to hold that data.
*/

