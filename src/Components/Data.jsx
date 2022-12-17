import React, { useState } from 'react'

export const Data = () => {
    const user = [{
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random() * (5 - 1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    },
    {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }, {
        name: 'Abhishek',
        batch: Math.floor(5 * Math.random() * 1000000),
        location: 'Delhi',
        experience: Math.floor(Math.random()*(5-1)),
        mobile: Math.floor(9 * Math.random() * 1000000000)
    }
    ]

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Batch No.</th>
                        <th scope="col">Location</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Mobile No.</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        user.map((el) => {
                            return (
                                <>
                                    <tr>
                                        <td scope="row">{el.name}</td>
                                        <td>{el.batch}</td>
                                        <td>{el.location}</td>
                                        <td>{el.experience}</td>
                                        <td>{el.mobile}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}
