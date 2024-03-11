import React from 'react'
import { Link } from 'react-router-dom'

function CopyRinght() {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content font-semibold">
                <aside>
                    <p>Copyright © 2024 - All right reserved by <Link to='/about'>HOPE HUES</Link> </p>
                </aside>
            </footer>
        </div>
    )
}

export default CopyRinght