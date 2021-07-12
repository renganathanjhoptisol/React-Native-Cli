import * as Actions from './ActionType';
import CounterComponent from '../components/CounterComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    count : state.CounterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment : () => dispatch ({
        type : Actions.COUNTER_INCREMENT
    }),
    decrement : () => dispatch ({
        type : Actions.COUNTER_DECREMENT
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent);