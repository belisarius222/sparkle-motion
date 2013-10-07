var colors = [
  '#ff5555',
  '#55ff55',
  '#5555ff',
  '#ffffff',
  '#ffff55',
  '#ff55ff',
  '#55ffff',
  '#ffffff'
];

Math.bound = function(x, min, max) {
  if (x < min) return min;
  if (x > max) return max;
  return x;
};

Math.sign = function(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
};

var Sparkles = [];
var maxSparkles = 100;
var updateMS = 40;
var tinyTimeMS = 500;
var deadTimeMS = 1000;
var maxSpeed = 0.5;
var decel = 0.8;

var Sparkle = function() {
  var self = this;

  self.startTime = +new Date;
  self.time = self.startTime;

  self.x = Mouse.x;
  self.y = Mouse.y;

  self.vx = Math.bound(Mouse.vx, -maxSpeed, maxSpeed);
  self.vy = Math.bound(Mouse.vy, -maxSpeed, maxSpeed);

  self.node = document.createElement('div');

  self.node.className = 'sparkle star';
  self.node.style.left = self.x + 'px';
  self.node.style.top  = self.y + 'px';

  document.body.appendChild(self.node);
};

_.extend(Sparkle.prototype, {
  update: function() {
    var self = this;
    var oldTime = self.time;
    self.time = +new Date;
    var dt = self.time - oldTime;


  },
  remove: function() {
    document.body.removeChild(this.node);
  }
});
