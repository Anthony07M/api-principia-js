const { Request, Response } = require("express");
const { listStudents, loadFile, sumPerMonth, update } = require("../services/index.js");

const ListController = async (req, res) => {
    try {
        const month1 = await sumPerMonth('2022-01');
        const month2 = await sumPerMonth('2022-02');
        const month3 = await sumPerMonth('2022-03');
        const month4 = await sumPerMonth('2022-04');

        return res.json([
            month1,
            month2,
            month3,
            month4,
        ])
    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: 'houve um erro interno' });
    }
}

const ListPerMonthController = async (req, res) => {
    try {
        const { month } = req.params;
        const result = await sumPerMonth(month);

        return res.json(result)
    } catch (e) {
        return res.status(400).json({ error: 'houve um erro interno' });
    }
}

const ListStudentsPerMonthController = async (req, res) => {
    try {
        const { month } = req.params;
        const [header, ...content] = await loadFile('../database/db.csv');
        const result = await listStudents(month)

        return res.json(result)
    } catch (e) {
        return res.status(400).json({ error: 'houve um erro interno' });
    }
}

const updateController = async (req, res) => { 
    try {
        const { month, mat } = req.body;
        await update(month, mat);
        return res.status(200).json({msg: 'ok'});
    } catch (e) {
        return res.status(400).json({ error: 'houve um erro interno' });
    }
}

module.exports = {
    ListController,
    ListPerMonthController,
    ListStudentsPerMonthController,
    updateController
}