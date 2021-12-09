const fs = require("fs");
const {
    array
} = require("yargs");
const yargs = require('yargs');
const students = require('./data')

// add student
yargs.command({
    command: 'add',
    describe: 'add student',
    builder: {
        id: {
            describe: 'this is title add command',
            demandOption: true,
            type: 'number'

        },
        name: {
            describe: 'this is body add command body',
            demandOption: true,
            type: 'string'
        },

        grade: {
            describe: 'this is grade',
            type: 'array'
        },

        comment: {
            describe: 'comment',
            type: 'string'
        }

    },
    handler: (argv) => {
        students.addastudent(argv.id, argv.name, argv.grade)

    }
})

////// delete
yargs.command({
    command: 'delete',
    describe: 'delete student',
    builder: {
        id: {
            describe: 'this is title delete command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        // console.log('delete student')
        students.deletstudent(argv.id)
    }
})

///// read
yargs.command({
    command: 'read',
    describe: 'read student ',
    builder: {
        id: {
            describe: 'this is title read command',
            demandOption: true,
            type: 'number'
        },
    },
    handler: (argv) => {
        // console.log('read student')
        students.readstudent(argv.id)

    }
})

// list
yargs.command({
    command: 'list',
    describe: 'student list ',
    handler: () => {
        // console.log('student list')
        students.liststudent()

    }
})


console.log(yargs.argv) //return all
// yargs.parse()        // return=>need only