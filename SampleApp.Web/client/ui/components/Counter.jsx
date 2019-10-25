import React from 'react';
import { inject, observer } from 'mobx-react';

@inject(i => ({
    counterViewStore: i.rootStore.counterViewStore
}))
@observer
class Counter extends React.Component {
    render() {
        const { increase, decrease, count } = this.props.counterViewStore;
        return (
            <div>
                <h3>{count}</h3>
                <br />
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary" onClick={e => increase()}>Add 1</button>
                    <button type="button" className="btn btn-secondary" onClick={e => decrease()}>Subtract 1</button>
                </div>
            </div>
        );
    }
}

export default Counter;