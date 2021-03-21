import MediaQuery from 'react-responsive'

import React from 'react'

export default function test() {
    return (
        <div className="container">
            <MediaQuery minwidth={1270}>
            <h1>You are probably on a laptop or larger size screen at this size</h1>
            </MediaQuery>
            <MediaQuery maxWidth={1269} minwidth={700}>
                <h1>Large tablet size</h1>
            </MediaQuery>
            <MediaQuery maxWidth={699} minwidth={300}>
                <h1>Mobile Layout</h1>
            </MediaQuery>
        </div>
    )
}
