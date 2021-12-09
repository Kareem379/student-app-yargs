const fs = require("fs");
const {
    title
} = require("process");
const {
    version
} = require("yargs");



// add student
const addastudent = (id, name,comment) => {
    const student = loadstudent();
    const dupliacatetitles = student.filter((note) => {
        return note.id === id;
    });

    console.log(dupliacatetitles.length);
    if (dupliacatetitles.length === 0) {
        student.push({
            id,
            name,
            comment
        });
        savestudent(student);
        console.log("save sucsses");
    } else {
        console.log(" not save");
    }
};

// delete student
const deletstudent = (id) => {
    const student = loadstudent();
    const studentstokeep = student.filter((note) => {
        return note.id !== id;
    });
    console.log(studentstokeep);
    savestudent(studentstokeep);
    console.log("student deleted");
};

// read student
const readstudent = (id) => {
    const student = loadstudent();
    const note = student.find((note) => {
        return note.id === id;
    });

    if (note) {
        console.log(note.name);
    } else {
        console.log("not found");
    }
};

// display list of all student
const liststudent = () => {
    const student = loadstudent();
    student.forEach((note) => {
        console.log(note.id, note.name);
    });

};

// load student function
const loadstudent = () => {
    try {
        const databuffer = fs.readFileSync("student.json").toString();
        return JSON.parse(databuffer);
    } catch (e) {
        return [];
    }
};

// save student function
const savestudent = (notes) => {
    const savedata = JSON.stringify(notes);
    fs.writeFileSync("student.json", savedata);
};

module.exports = {
    addastudent,
    deletstudent,
    readstudent,
    liststudent,
};