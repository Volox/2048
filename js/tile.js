
function Tile(position, value ) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.label            = Tile.valueMap[ value ] || 'hodor';

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.valueMap = {};
Tile.valueMap[ 2 ] = ' ';
Tile.valueMap[ 4 ] = ' ';
Tile.valueMap[ 8 ] = ' ';
Tile.valueMap[ 16 ] = ' ';
Tile.valueMap[ 32 ] = ' ';
Tile.valueMap[ 64 ] = ' ';
Tile.valueMap[ 128 ] = ' ';
Tile.valueMap[ 256 ] = ' ';
Tile.valueMap[ 512 ] = ' ';
Tile.valueMap[ 1024 ] = ' ';
Tile.valueMap[ 2048 ] = '';
Tile.valueMap[ 4096 ] = 'HODOR!';
Tile.valueMap[ 8192 ] = 'HODOOOR';

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value,
    label: this.label
  };
};
