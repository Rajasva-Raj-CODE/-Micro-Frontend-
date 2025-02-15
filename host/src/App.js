import React, { Suspense } from "react";

const ChatApp = React.lazy(() => import("chat/App"));
const EmailApp = React.lazy(() => import("email/App"));
// import ChatApp from 'chat/App'
// import EmailApp from 'email/App'

const App = () => {
  return (
    <div>
      Host APP
      <Suspense fallback={<div>Loading...</div>}>
        <ChatApp />
        <EmailApp />
      </Suspense>
    </div>
  );
};

export default App;
