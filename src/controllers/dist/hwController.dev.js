"use strict";

var Makale = require('../models/makaleModel');

var getRawData = function getRawData(req, res, next) {
  var allMakale;
  return regeneratorRuntime.async(function getRawData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Makale.find({}));

        case 2:
          allMakale = _context.sent;
          return _context.abrupt("return", res.render('./makaleler/raw.ejs', {
            makaleler: allMakale
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getPaginatedData = function getPaginatedData(req, res, next) {
  var activePage, limitForEachPage, allDataCount, totalPageCount, makales;
  return regeneratorRuntime.async(function getPaginatedData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          activePage = req.query.page ? req.query.page : req.query.p ? req.query.p : 0;
          activePage = activePage >= 0 ? activePage : 0;
          limitForEachPage = 15;
          _context2.next = 5;
          return regeneratorRuntime.awrap(Makale.countDocuments({}).exec());

        case 5:
          allDataCount = _context2.sent;
          totalPageCount = Math.ceil(allDataCount / limitForEachPage);
          _context2.next = 9;
          return regeneratorRuntime.awrap(Makale.find({}).skip(activePage * limitForEachPage).limit(limitForEachPage));

        case 9:
          makales = _context2.sent;
          return _context2.abrupt("return", res.render('./makaleler/pagineted.ejs', {
            makales: makales,
            totalPageCount: totalPageCount,
            activePage: activePage
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = {
  getRawData: getRawData,
  getPaginatedData: getPaginatedData
};