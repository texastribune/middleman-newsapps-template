//=require tablesift.js/dest/tablesift

TableSift.init('sortable', {
  removeChars: [',', '$'],
  customSort:{
    2: function(con, el) {
      return Date.parse(con);
    },
    4: function(con, el) {
      return Date.parse(con);
    },
    6: function(con, el) {
      if (con.match(/\d/)) {
        return Number(con.replace(/[^0-9\.]+/g,""));
      } else {
        return 0;
      }
    },
    7: function(con, el) {
      if (con.match(/\d/)) {
        return Number(con.replace(/[^0-9\.]+/g,""));
      } else {
        return -10;
      }
    },
    8: function(con, el) {
      if (con.match(/\d/)) {
        return Number(con.replace(/[^0-9\.]+/g,""));
      } else {
        return -10;
      }
    },
    9: function(con, el) {
      if (con.match(/\d/)) {
        return Number(con.replace(/\,|\*+/, ''));
      } else {
        return -50000;
      }
    }
  }
});
