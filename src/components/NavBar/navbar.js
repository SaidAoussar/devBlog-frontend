import React from 'react';

import TopNav from './top_nav'
import BottomNav from './bottom_nav'

export default function navbar() {
    return (
        <div>
            <header id="header">
                <div id="nav">
                    <TopNav />
                    <BottomNav />
                </div>
            </header>
        </div>
    )
}
