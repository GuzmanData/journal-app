import React from 'react'
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const entries = [1, 2, 3];

    return (
        <div className="jurnal__entries pointer">
            {
                entries.map(value => (
                    <JournalEntry key={value} />
                ))
            }

        </div>
    )
}
