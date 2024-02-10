import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './App.css'
function App() {
    return (
        <div>
            <h1>install bootstrap</h1>
            <Button variant="primary" onClick={() => alert("hello from the bootstrap button")}>Primary</Button>{' '}
            {

                // [
                //     'primary',
                //     'secondary',
                //     'success',
                //     'danger',
                //     'warning',
                //     'info',
                //     'light',
                //     'dark',
                // ].map((variant) => (
                
                    <Alert variant="warning">
                        This is a alert—check it out!
                    </Alert>
                }
        </div>
    )
}
export default App;

// note :- npm install react-bootstrap bootstrap
// go through the link :-https://react-bootstrap.netlify.app/docs/getting-started/introduction
//import Button from 'react-bootstrap/Button';   to use the button property.
//go through the link to use alert :- https://react-bootstrap.netlify.app/docs/components/alerts