import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const loop_data = [
            {
                c_name : 'Alex',
                c_data: 'content 1'
            },
            {
                c_name : 'Alex 1',
                c_data: 'content 1'
            },
            {
                c_name : 'Alex 2',
                c_data: 'content 1'
            }
        ];

        return (
        
            <div className='col-12 text-center'>
                {
                    loop_data.map(function(item){
                       return ( <div key={item.c_name}>
                           <CommentDetail item={item} />                        
                        </div>
                       )
                    })
                }
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
