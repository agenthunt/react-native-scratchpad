// HelloView.js

/*import { requireNativeComponent, PropTypes, View } from 'react-native';

var iface = {
  name: 'HelloView',
  propTypes: {
    message: PropTypes.string,
    ...View.propTypes
  }
};

module.exports = requireNativeComponent('HelloView', iface);*/

'use strict';

var React = require('react-native');
var { requireNativeComponent, PropTypes, View } = React;

var NativeHelloView = requireNativeComponent('HelloView', HelloView);

class HelloView extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.nativeEvent);
    }
  }

  render() {
    return (
      <NativeHelloView
        {...this.props} onChange={this._onChange}
        values={this.props.values} selected={this.props.selected} />
    );
  }
}

HelloView.propTypes = {
  ...View.propTypes,
  values: PropTypes.array.isRequired,
  selected: PropTypes.number,
  onChange: PropTypes.func
};

HelloView.defaultProps = {
  values: [ '' ],
  selected: 0
}

module.exports = HelloView;