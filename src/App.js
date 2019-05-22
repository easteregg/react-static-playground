import React from 'react';
import Index from './pages/index.md';
import './App.css';
import Markdown from 'markdown-to-jsx';
import Zone     from './Zone';
import ClientSpecificContentComponent from './ClientSpecificContentComponent'

function App() {
    console.log(JSON.stringify(Index));
  return (
    <div className="App">
      <header className="App-header">
        <Markdown
            children={Index}
            options={{
                overrides: {
                    GEO: {
                        component: Zone, // Replaces tag with specified component
                    },
                    Client: {
                        component: ClientSpecificContentComponent // supports custom component name
                    }
                },
            }}
        />
      </header>
    </div>
  );
}

export default App;
