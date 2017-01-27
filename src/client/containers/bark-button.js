import { connect } from 'react-redux';
import Button from '../components/button';
import { toggleBark } from '../actions/dog-actions';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(toggleBark()); },
  actionLabel: Button.propTypes.actionLabel === 'Bark' ? 'Stop Bark' : 'Bark',
});

const mapStateToProps = state => ({
  actionLabel: state.dog.get('hasBarked') ? 'Stop Bark' : 'Bark',
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
