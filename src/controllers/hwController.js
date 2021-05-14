const Makale = require('../models/makaleModel')

const getRawData = async(req,res,next) => {

    const allMakale = await Makale.find({})

    

    return res.render('./makaleler/raw.ejs',{makaleler : allMakale})

}

const getPaginatedData = async(req,res,next) => {

    let activePage = req.query.page ? req.query.page : (req.query.p ? req.query.p : 0) 
    activePage = activePage >= 0 ? activePage : 0;


    const limitForEachPage = 15
    const allDataCount = await Makale.countDocuments({}).exec();
    const totalPageCount = Math.ceil(allDataCount / limitForEachPage)

    const makales = await Makale.find({}).skip(activePage * limitForEachPage).limit(limitForEachPage)

    return res.render('./makaleler/pagineted.ejs',{makales,totalPageCount,activePage})
}

module.exports = {
    getRawData,
    getPaginatedData
}