'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _linear = require('./linear');

var _linear2 = _interopRequireDefault(_linear);

var _sector = require('./sector');

var _sector2 = _interopRequireDefault(_sector);

var _ops = require('./ops');

exports['default'] = function (_ref) {
  var data = _ref.data;
  var accessor = _ref.accessor;
  var center = _ref.center;
  var r = _ref.r;
  var R = _ref.R;
  var compute = _ref.compute;

  var values = data.map(accessor);
  var s = (0, _ops.sum)(values);
  var scale = (0, _linear2['default'])([0, s], [0, 2 * Math.PI]);
  var curves = [];
  var t = 0;
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var value = values[i];
    curves.push((0, _ops.enhance)(compute, {
      item: item,
      index: i,
      sector: (0, _sector2['default'])({
        center: center,
        r: r,
        R: R,
        start: scale(t),
        end: scale(t + value)
      })
    }));
    t += value;
  }

  return { curves: curves };
};

module.exports = exports['default'];