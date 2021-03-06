var React = require('react');
var span = React.DOM.span;
var li = React.DOM.li;

module.exports = React.createClass({
  handleClick: function() {
    this.props.onRemove(this.props.value)
  },

  handleKeyDown: function(key) {
    var enterKey = 13;
    if(key.keyCode === enterKey) this.props.onRemove(this.props.value)
  },

  render: function() {
    return (
      li({
        className: "ic-token inline-flex",
        tabIndex: 0
      },
        span({
          role: 'button',
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          'aria-label': 'Close button',
          className: "ic-token-close-button",
          tabIndex: 0
        }, "✕"),
        span({className: "ic-token-label"}, this.props.name)
      )
    )
  }
})
