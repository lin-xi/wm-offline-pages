import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import TapEventPlugin from 'react/lib/TapEventPlugin';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

TapEventPlugin.extractEvents();

const App = React.createClass({
    mixins: [PureRenderMixin],
    render(){
        return (
            <MuiThemeProvider>
                <Index/>
            </MuiThemeProvider>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
);
