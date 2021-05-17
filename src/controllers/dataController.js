const Makale = require('../models/makaleModel')


const getMakales = async(req,res,next) => {

    let activePage = req.query.page ? req.query.page : (req.query.p ? req.query.p : 0) 
    activePage = activePage >= 0 ? activePage : 0;


    const limitForEachPage = 15
    const allDataCount = await Makale.countDocuments({}).exec();
    const totalPageCount = Math.ceil(allDataCount / limitForEachPage)

    const makales = await Makale.find({}).skip(activePage * limitForEachPage).limit(limitForEachPage)

    return res.json({data : makales,page_count: totalPageCount,limit:limitForEachPage,active_page:+activePage})
}

module.exports = {
    getMakales
}